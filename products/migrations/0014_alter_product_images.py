# Generated by Django 3.2.5 on 2021-08-30 21:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0013_alter_product_images'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='images',
            field=models.CharField(blank=True, max_length=754, null=True),
        ),
    ]