from rest_framework.generics import RetrieveAPIView

from .serializers import LocationSerializer
from .models import Location


class LocationView(RetrieveAPIView):
    serializer_class = LocationSerializer
    queryset = Location.objects.all()
