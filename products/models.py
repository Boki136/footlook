from django.db import models
from django.core.serializers import serialize


# Create your models here.


class Category(models.Model):

    class Meta:
        verbose_name_plural = 'Categories'

    name = models.CharField(max_length=254)
    friendly_name = models.CharField(max_length=254, null=True, blank=True)

    def __str__(self):
        return self.name

    def get_friendly_name(self):
        return self.friendly_name


class Product(models.Model):

    category = models.ForeignKey('Category', null=True, blank=True, on_delete=models.SET_NULL)
    sku = models.CharField(max_length=254, null=True, blank=True)
    name = models.CharField(max_length=454)
    description = models.TextField()
    rrp = models.DecimalField(max_digits=8, decimal_places=2)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    rating = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    images = models.CharField(max_length=754, null=True, blank=True)
    brand = models.CharField(max_length=254, null=True)
    discount = models.DecimalField(max_digits=8, decimal_places=2, null=True)

    def __str__(self):
        return self.name
