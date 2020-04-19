# Generated by Django 3.0.5 on 2020-04-18 23:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('email', models.EmailField(max_length=100, unique=True)),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('gender', models.CharField(choices=[('male', 'Male'), ('female', 'Female')], max_length=6)),
                ('company', models.CharField(max_length=100)),
                ('title', models.CharField(max_length=100)),
            ],
            options={
                'ordering': ['id'],
            },
        ),
    ]
