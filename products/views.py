from django.shortcuts import render, redirect, reverse, get_object_or_404
from django.contrib import messages
from django.db.models import Q
from .models import Product, Category
import ast


# Create your views here.
def products_view(request):
    """ A view to show products in selected category """

    products = Product.objects.all()
    query = None
    categories = None

    if request.GET:
        if 'category' in request.GET:
            categories = request.GET['category'].split(',')
            products = products.filter(category__name__in=categories)
            categories = Category.objects.filter(name__in=categories)

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
        'current_categories': categories,
    }

    return render(request, "products/products.html", context)


def product_detail(request, product_id):
    """ A view to show individual product information """

    product = get_object_or_404(Product, pk=product_id)

    image_list = product.images
    image_list = ast.literal_eval(image_list)
    product_calculation = int(product.price) * 0.011
    product.price = "{:.2f}".format(product_calculation)
    product.images = image_list
    

    context = {
        'product': product,
    }

    return render(request, "products/product_detail.html", context)

