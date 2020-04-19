from django.test import TestCase
from django.urls import reverse
from django.forms.models import model_to_dict
from django.core.management import call_command
from rest_framework.test import APIClient
from rest_framework import status

from .models import Customer


CUSTOMERS_URL = reverse('customers:customer-list')


def create_customer(
    id,
    first_name='test',
    last_name='user',
    email='test@user.com',
    gender='male',
    company='oowlish',
    title='wannabe dev'
) -> Customer:
    return Customer.objects.create(
        id=id,
        first_name=first_name,
        last_name=last_name,
        email=email,
        gender=gender,
        company=company,
        title=title
    )


def get_customer_details_url(id):
    return reverse('customers:customer-detail', kwargs={'pk': id})


class CustomerTests(TestCase):
    """
    Tests the customers api endpoints
    """

    @classmethod
    def setUpTestData(cls):
        cls.client = APIClient()
        call_command('populate_db')

    def test_fetching_customers_list(self):
        """
        Tests if customer list endpoint returns the correct data
        """

        response = self.client.get(CUSTOMERS_URL)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data['results']), 20)

    def test_fetching_customer_details(self):
        """
        Tests if the customer details endpoint returns the correct data
        """

        response = self.client.get(get_customer_details_url(1))
        customer = Customer.objects.get(id=1)
        customer_fields = model_to_dict(customer).keys()

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(customer_fields, response.data.keys())
