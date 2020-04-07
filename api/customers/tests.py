from django.test import TestCase

from .models import Customer


def create_customer(
    id,
    first_name='test',
    last_name='user',
    email='test@user.com',
    gender='male',
    company='oowlish',
    title='wannabe dev'
) -> Customer:
    return Customer.objects.create(
        id=id,
        first_name=first_name,
        last_name=last_name,
        email=email,
        gender=gender,
        company=company,
        title=title
    )


class CustomerTests(TestCase):

    def test_gender_names_showed_properly(self):
        """
        Tests if the gender names are being displayed correctly
        """

        m_customer = create_customer(1)
        f_customer = create_customer(
            2,
            email='test2@user',
            last_name='test',
            gender='female'
        )

        self.assertEqual(m_customer.gender.lower(), 'male')
        self.assertEqual(f_customer.gender.lower(), 'female')
