from rest_framework import serializers

from customers.models import Customer


class CustomerSerializer(serializers.ModelSerializer):
    """
    Customer model serializer
    """
    class Meta:
        model = Customer
        ordering = ['-id']
        exclude = []
