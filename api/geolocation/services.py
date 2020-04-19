from django.conf import settings
from geocoder import tomtom as GeoCoder


def get_city_geocode(city):
    return GeoCoder(
            location=city,
            countrySet='US',
            key=settings.API_KEY
        ).latlng
