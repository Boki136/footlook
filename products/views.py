from django.shortcuts import render, redirect, reverse
from django.contrib import messages
from django.db.models import Q
from .models import Product
import ast


# Create your views here.
def products_view(request):
    """ A view to show products in selected category """

    products = Product.objects.all()
    query = None

    if request.GET:
        if 'search_term' in request.GET:
            query = request.GET['search_term']
            if not query:
                messages.error(request, "You didn't enter any search terms")
                return redirect(reverse('products'))

            queries = Q(name__icontains=query) | Q(description__icontains=query)
            products = products.filter(queries)

    for product in products:
        image_list = product.images
        image_list = ast.literal_eval(image_list)
        product_calculation = int(product.price) * 0.011
        product.price = "{:.2f}".format(product_calculation)
        product.images = image_list

    context = {
        'products': products,
        'search_term': query,
    }

    return render(request, "products/products.html", context)
