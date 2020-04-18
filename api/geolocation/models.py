from django.db import models

from customers.models import Customer


class Location(models.Model):
    """
    Contains the city and its latitude and longitude of a customer
    """

    customer_id = models.ForeignKey(
        to=Customer, on_delete=models.CASCADE
    )
    city = models.CharField(max_length=100, default='')
    latitude = models.FloatField()
    longitude = models.FloatField()
