from django.test import TestCase
from django.core.management import call_command
from django.urls import reverse
from rest_framework.test import APIClient
from rest_framework import status

from customers.models import Customer
from .models import Location
from .services import get_city_geocode


def get_location_url(customer_id):
    return reverse('geolocation:customer_location',
                   kwargs={'pk': customer_id})


class LocationApiTest(TestCase):
    """
    Tests the location api
    """

    @classmethod
    def setUpTestData(cls):
        call_command('populate_db')

        cls.client = APIClient()
        cls.customer = Customer.objects.get(id=1)

    def test_fetch_location(self):
        """
        Tests whether the api returns the right geolocation.
        """

        location = Location.objects.get(customer=self.customer)
        (lat, long) = get_city_geocode(location.city)

        response = self.client.get(get_location_url(self.customer.id))
        res_lat = response.data['latitude']
        res_long = response.data['longitude']

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual((lat, long), (res_lat, res_long))
