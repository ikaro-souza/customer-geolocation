from django.test import TestCase
from django.urls import reverse
from django.forms.models import model_to_dict
from django.core.management import call_command
from rest_framework.test import APIClient
from rest_framework import status

from .resources import GMAPS_BASE_URL
from customers.models import Customer

import sys
import requests


def get_customer_localization_url(id) -> str:
    return reverse('localization:customer-localization', kwargs={'pk': id})


class LocalizationApiTest(TestCase):
    """
    Tests the localization api endpoints
    """

    def setUp(self):
        self.customer = Customer.objects.get(id=1)
        self.client = APIClient()

    def test_latitude_and_longitude(self):
        """
        Tests if a customer's latitude and longitude are being correctly
        fetched
        """

        gmaps_response = requests.get(
            GMAPS_BASE_URL,
            params={'address': self.customer.city}
        )
        sys.stdout.write(gmaps_response.json())
