# Generated by Django 3.2.5 on 2021-07-19 22:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_auto_20210719_2237'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='images',
            field=models.URLField(blank=True, max_length=1024, null=True),
        ),
    ]
