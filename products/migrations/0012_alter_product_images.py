# Generated by Django 3.2.5 on 2021-08-28 12:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0011_alter_product_rating'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='images',
            field=models.URLField(blank=True, null=True),
        ),
    ]
