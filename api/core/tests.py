from django.test import TestCase
from django.core.management import call_command

from customers.models import Customer


class CommandTests(TestCase):
    """Tests custom django commands"""

    def test_populate_db(self):
        """Tests if the populate_db works"""

        call_command('populate_db')
        customers_ammount = Customer.objects.all().count()

        self.assertEqual(customers_ammount, 1000)
