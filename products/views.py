from django.shortcuts import render
from .models import Product
import ast



# Create your views here.

def products_per_category(request):
    """ A view to show products in selected category """

    products = Product.objects.all()
    for product in products:
        image_list = product.images
        image_list = ast.literal_eval(image_list)
        product.images = image_list

    context = {
        'products': products,
    }

    return render(request, "products/products.html", context)
