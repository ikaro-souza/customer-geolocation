from django.core.management.base import BaseCommand
from django.core.management import call_command
from django.db.utils import OperationalError

from customers.models import Customer
from geolocation.models import Location

from geocoder import mapquest as GeoCoder

import csv
import sys
import time


# API_KEY = 'AuvobGc265ZsvyqomT_TqrkOMn2OxkRiuAXeZBtGk3aUpSkiIHkk_SY54MvjXRiW'
API_KEY = 'cT9PCC4Qgd1t4zImBVRxIFYAokntlDGH'


class Command(BaseCommand):
    """
    Command that populates the Locations table
    """

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.cities = self.get_cities()
        self.geocodes = self.get_geocodes()

    def handle(self, *args, **options):
        sys.stdout.write("Populating location table...\n")

        try:
            call_command('populate_customers')
            customers = Customer.objects.all()
            i = 0

            for c in customers:
                Location.objects.get_or_create(
                    customer=customers[i],
                    city=self.cities[i],
                    latitude=self.geocodes[i][0],
                    longitude=self.geocodes[i][1]
                )
                i += 1

        except OperationalError or IOError as error:
            raise error
            sys.exit(1)

        sys.stdout.write("Populated location table\n")

    @staticmethod
    def get_cities():
        """
        Lists and returns the first 100 customer cities
        """
        with open('./customers.csv') as file:
            reader = csv.DictReader(file)
            return [c['city'] for c in reader]

    def get_geocodes(self):
        """
        Fetches and returns each city's latitude and longitude
        """

        TOTAL = len(self.cities)
        PARTS = 10
        PART_SIZE = int(TOTAL / PARTS)

        fetched = 0
        tries = 0
        geocodes = []

        while fetched < PARTS:
            sys.stdout.write(
                f'Fetching geocodes ({fetched*PART_SIZE}/{TOTAL})...\n'
            )

            try:
                cities = self.cities[fetched*PART_SIZE:(fetched+1)*PART_SIZE]
                results = GeoCoder(
                    cities, method='batch', key=API_KEY
                )
                geocodes.extend([result.latlng for result in results])

                tries = 0
                fetched += 1

                time.sleep(1)

            except Exception as error:
                tries += 1

                if tries == 5:
                    raise error

                else:
                    sys.stderr.write(
                        f'Some error happened, trying again in 1 second...\n'
                    )

        return geocodes
