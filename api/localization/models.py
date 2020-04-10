from django.db import models

from customers.models import Customer


class CustomerLocalization(models.Model):
    customer_id = models.ForeignKey(Customer, on_delete=models.CASCADE)
    latitude = models.FloatField()
    longitude = models.FloatField()
