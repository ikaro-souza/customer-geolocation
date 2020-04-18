from django.test import TestCase
from django.core.management import call_command

from customers.models import Customer
from geolocation.models import Location


class CommandTests(TestCase):
    """Tests custom django commands"""

    def test_populate_customers(self):
        """
        Tests if the populate_customers command is populating
        the Customers table
        """

        call_command('populate_customers')
        db_customers_count = Customer.objects.all().count()

        self.assertEqual(db_customers_count, 1000)

    def test_populates_locations(self):
        """
        Tests if the populate_customers command is populating
        the Locations table
        """

        call_command('populate_locations')
        db_locations_count = Location.objects.all().count()

        self.assertEqual(db_locations_count, 60)
