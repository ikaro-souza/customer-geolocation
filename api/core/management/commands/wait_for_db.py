from django.core.management.base import BaseCommand
from django.db.utils import OperationalError
from django.db import connections

import time


class Command(BaseCommand):
    """
    Command that waits for the db to be ready for connections
    """

    def handle(self, *args, **options):
        self.stdout.write('Waiting for database...\n')

        db_connection = None
        while not db_connection:
            try:
                db_connection = connections['default']
                self.stdout.write(
                    self.style.SUCCESS('Connected to database.\n')
                )
            except OperationalError:
                self.stdout.write(
                    self.style.ERROR(
                        'Database unavailable, ' +
                        'trying again in 1 second...\n'
                    )
                )
                time.sleep(1)
