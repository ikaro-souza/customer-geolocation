from django.core.management.base import BaseCommand
from django.db.utils import OperationalError

from customers.models import Customer

import csv
import sys


class Command(BaseCommand):
    """Django command to pause execution until database is available"""

    def handle(self, *args, **options):
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

        self.stdout.write(self.style.SUCCESS('Connected to database.'))
