from django.shortcuts import render
from .models import Product

# Create your views here.


def products_per_category(request):
    """ A view to show products in selected category """

    products = Product.objects.all()
    context = {
        'products': products,
    }
    return render(request, "products/products.html", context)