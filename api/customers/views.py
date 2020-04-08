from rest_framework.viewsets import ReadOnlyModelViewSet

from .serializers import CustomerSerializer
from .models import Customer


class CustomerViewSet(ReadOnlyModelViewSet):
    """
    Customers api endpoints, one for listing customers (with pagination)
    and other for individual customers
    """

    serializer_class = CustomerSerializer
    queryset = Customer.objects.all()
