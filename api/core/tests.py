from django.test import TestCase
from django.core.management import call_command
from unittest.mock import patch

from customers.models import Customer
from geolocation.models import Location


class CommandTests(TestCase):
    """Tests custom django commands"""

    def test_populate_customers(self):
        """
        Tests if the populate_customers command is populating
        the Customers table
        """

        call_command('populate_db')
        db_customers_count = Customer.objects.all().count()
        db_locations_count = Location.objects.all().count()

        self.assertEqual(db_customers_count, 1000)
        self.assertEqual(db_locations_count, 1000)

    @patch('time.sleep', return_value=True)
    def test_wait_for_db(self, ts):
        """
        Tests if the api is waiting for the db to be ready
        """

        with patch('django.db.utils.ConnectionHandler.__getitem__') as gi:
            gi.return_value = True
            call_command('wait_for_db')

            self.assertTrue(gi.call_count <= 5)
