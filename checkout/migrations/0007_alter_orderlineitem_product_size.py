# Generated by Django 3.2.5 on 2021-09-02 22:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('checkout', '0006_alter_orderlineitem_product_size'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderlineitem',
            name='product_size',
            field=models.CharField(blank=True, max_length=5, null=True),
        ),
    ]