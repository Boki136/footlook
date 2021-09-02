from django.shortcuts import render
from products.models import Product
import ast

# Create your views here.


def index(request):

    """ View to return homepage """
    products = Product.objects.all()[:10]
    for product in products:
        image_list = product.images
        image_list = ast.literal_eval(image_list)
        product_calculation = int(product.price) * 0.011
        product.price = "{:.2f}".format(product_calculation)
        product.images = image_list

    context = {
        'products': products,
    }

    return render(request, "home/index.html", context)
