from django.urls import path
from . import views

urlpatterns = [
    path('', views.products_per_category, name='products per category')
]