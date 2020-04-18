from django.core.management.base import BaseCommand
from django.db.utils import OperationalError

from customers.models import Customer

import csv
import sys


class Command(BaseCommand):
    """
    Command that populates the Customers table
    """

    def handle(self, *args, **options):
        sys.stdout.write("Populating customers table...\n")

        try:
            with open('./customers.csv') as file:
                reader = csv.DictReader(file)

                for row in reader:
                    Customer.objects.get_or_create(
                        id=row['id'],
                        email=row['email'],
                        first_name=row['first_name'],
                        last_name=row['last_name'],
                        gender=row['gender'],
                        company=row['company'],
                        title=row['title']
                    )

        except OperationalError or IOError as error:
            raise error
            sys.exit(1)

        sys.stdout.write("Populated customers table\n")
