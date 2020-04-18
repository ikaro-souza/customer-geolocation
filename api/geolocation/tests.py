from django.test import TestCase
from django.core.management import call_command
from django.urls import reverse
from django.forms.models import model_to_dict
from rest_framework.test import APIClient
from rest_framework import status

from customers.models import Customer
from .models import Location


def get_location_url(customer_id):
    return reverse('geolocation:customer_location',
                   kwargs={'pk': customer_id})


class LocationApiTest(TestCase):
    """
    Tests the location api
    """

    @classmethod
    def setUpTestData(cls):
        call_command('populate_customers')
        call_command('populate_locations')

        cls.client = APIClient()
        cls.customer1 = Customer.objects.get(id=1)
        cls.customer2 = Customer.objects.get(id=100)

    def test_fetch_location(self):
        """
        Tests if the customer location endpoint is returning the correct
        data.
        """

        response = self.client.get(get_location_url(self.customer2.id))
        db_location = Location.objects.get(customer=self.customer2)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(model_to_dict(db_location), response.data)
