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
        try:
            location = self.get_object(self.kwargs['pk'])
        except Location.DoesNotExist as e:
            return Response(
                data={'message': e.message}, status=status.HTTP_404_NOT_FOUND
            )

        if location.latitude == 0 and location.longitude == 0:
            location = self.update_location_gecode(location)

        data = LocationSerializer(location).data
        return Response(data=data, status=status.HTTP_200_OK)

    def update_location_gecode(self, location: Location):
        (lat, long) = get_city_geocode(location.city)
        location.latitude = lat
        location.longitude = long
        location.save()

        return location
