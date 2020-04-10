from django.core.management.base import BaseCommand
from django.db.utils import OperationalError

from customers.models import Customer
from localization.models import CustomerLocalization

import csv
import sys


class Command(BaseCommand):
    """Django command to pause execution until database is available"""

    def handle(self, *args, **options):
        sys.stdout.write("\nPopulating database...\n")

        try:
            with open('./customers.csv') as file:
                reader = csv.DictReader(file)

                for row in reader:
                    customer = Customer.objects.get_or_create(
                        id=row['id'],
                        email=row['email'],
                        first_name=row['first_name'],
                        last_name=row['last_name'],
                        gender=row['gender'],
                        company=row['company'],
                        title=row['title'],
                    )
                    CustomerLocalization.objects.get_or_create(
                        customer_id=customer.id,
                        address=row['city']
                    )

        except OperationalError or IOError as error:
            raise error
            sys.exit(1)

        sys.stdout.write("\nDatabase populated\n")
