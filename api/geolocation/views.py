from rest_framework.generics import RetrieveAPIView
from rest_framework import status
from rest_framework.response import Response

from .serializers import LocationSerializer
from .models import Location
from .services import get_city_geocode


class LocationView(RetrieveAPIView):
    serializer_class = LocationSerializer
    queryset = Location.objects.all()

    def get_object(self, pk):
        try:
            location = Location.objects.get(customer=pk)
        except Location.DoesNotExist as e:
            raise e

        return location

    def retrieve(self, request, *args, **kwargs):
        customerId = self.kwargs['pk']
        try:
            location = self.get_object(customerId)
        except Location.DoesNotExist as e:
            return Response(
                data={'message': e.message}, status=status.HTTP_404_NOT_FOUND
            )

        if location.latitude == 0 and location.longitude == 0:
            location = self.update_location_geocode(customerId)

        data = LocationSerializer(location).data
        return Response(data=data, status=status.HTTP_200_OK)

    def update_location_geocode(self, customerId):
        location = Location.objects.filter(customer=customerId)
        (lat, long) = get_city_geocode(location.first().city)
        location.update(latitude=lat, longitude=long)

        return Location.objects.get(customer=customerId)
