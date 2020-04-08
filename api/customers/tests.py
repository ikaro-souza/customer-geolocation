from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APIClient

from .models import Customer


CUSTOMER_LIST_URL = reverse('customers:customer-list')


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


class CustomerTests(TestCase):
    """
    Tests the customers api endpoints
    """

    def setUp(self):
        self.client = APIClient()

    def test_fetching_customers_list(self):
        """
        Tests if customer list is being properly fetched
        """

        response = self.client.get(CUSTOMER_LIST_URL)
        db_customers = Customer.objects.all()[:51]

        self.assertEqual(len(response.data['results']), len(db_customers))
