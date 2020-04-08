from django.test import TestCase
from django.core.management import call_command

from customers.models import Customer


class CommandTests(TestCase):
    """Tests custom django commands"""

    def test_populate_db(self):
        """
        Tests if the populate_db correctly loads the csv file data
        into the database
        """

        call_command('populate_db')
        db_customers_count = Customer.objects.all().count()

        self.assertEqual(db_customers_count, 1000)
