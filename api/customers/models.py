from django.db import models


class Customer(models.Model):
    class Gender(models.TextChoices):
        MALE = 'male',
        FEMALE = 'female',

    id = models.IntegerField(primary_key=True)
    email = models.EmailField(max_length=100, unique=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    gender = models.CharField(max_length=6, choices=Gender.choices)
    company = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
