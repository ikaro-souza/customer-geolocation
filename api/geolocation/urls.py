from django.urls import path

from .views import LocationView

app_name = 'geolocation'
urlpatterns = [
    path('customer/<int:pk>/',
         LocationView.as_view(),
         name='customer_location'),
]
