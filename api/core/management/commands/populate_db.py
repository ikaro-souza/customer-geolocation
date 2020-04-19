from django.core.management.base import BaseCommand
from django.db.utils import OperationalError

from customers.models import Customer
from geolocation.models import Location

import csv
import sys


class Command(BaseCommand):
    """
    Command that populates the Customers table
    """

    def __init__(self, *args, **kwargs):
        super().__init__()
        self.customers = self._get_customer_from_file()
        self.cities = [c['city'] for c in self.customers]

    def handle(self, *args, **options):
        sys.stdout.write("Populating db...\n")

        try:
            for customer in self.customers:
                Customer.objects.get_or_create(
                    id=customer['id'],
                    email=customer['email'],
                    first_name=customer['first_name'],
                    last_name=customer['last_name'],
                    gender=customer['gender'],
                    company=customer['company'],
                    title=customer['title']
                )

            i = 1
            for city in self.cities:
                customer = Customer.objects.get(id=i)
                Location.objects.get_or_create(
                    customer=customer,
                    city=city,
                    latitude=0,
                    longitude=0
                )

                i += 1

        except OperationalError as error:
            raise error

        sys.stdout.write("Db populated\n")

    def _get_customer_from_file(self):
        with open('./customers.csv') as file:
            reader = csv.DictReader(file)
            return [{
                        'id': row['id'],
                        'email': row['email'],
                        'first_name': row['first_name'],
                        'last_name': row['last_name'],
                        'gender': row['gender'],
                        'company': row['company'],
                        'title': row['title'],
                        'city': row['city']
                    }
                    for row in reader]
