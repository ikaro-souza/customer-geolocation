from django.conf import settings

from typing import Dict
import requests


GMAPS_BASE_URL = '{}{}'.format(
    'https://maps.googleapis.com/maps/api/geocode/json',
)


def get_address_coordinates(address: str) -> Dict[str, str]:
    response = requests.get(GMAPS_BASE_URL, params={
        'key': settings.GMAPS_API_KEY,
        'address': address
    })

    return response.json()
