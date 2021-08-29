from django.shortcuts import render, redirect, reverse, get_object_or_404
from django.contrib import messages
from django.db.models import Q
from django.contrib.auth.decorators import login_required

from .models import Product, Category
from .forms import ProductForm

import ast


# Create your views here.
def products_view(request):
    """ A view to show products in selected category """

    products = Product.objects.all()
    query = None
    categories = None
    brand = None
    sort = None
    direction = None
    brand_name = None
    image_list = None

    if request.GET:
        if 'sort' in request.GET:
            sortval = request.GET['sort']
            sort = sortval
            if sortval == 'name':
                sortval = 'lower_name'
                products = products.annotate(lower_name=Lower('name'))
            elif sortval == 'rating':
                sortval = f'-{sortval}'
                products = products.order_by(sortval)

            if 'direction' in request.GET:
                direction = request.GET['direction']
                if direction == 'dsc':
                    sortval = f'-{sortval}'
            products = products.order_by(sortval)

        if 'category' in request.GET:
            categories = request.GET['category'].split(',')
            products = products.filter(category__name__in=categories)
            categories = Category.objects.filter(name__in=categories)

    if request.GET:
        if 'brand' in request.GET:
            brand = request.GET['brand'].split(',')
            products = products.filter(brand__in=brand)
            brand = Product.objects.filter(brand__in=brand)
            brand_name = request.GET['brand']

    if request.GET:
        if 'search_term' in request.GET:
            query = request.GET['search_term']
            if not query:
                messages.error(request, "You didn't enter any search terms, try again.")
                return redirect(reverse('products'))
            queries = Q(name__icontains=query) | Q(
                description__icontains=query)
            products = products.filter(queries)

    for product in products:
        image_list = product.images
        image_list = ast.literal_eval(image_list)
        product.images = image_list
        product_calculation = int(product.price) * 0.011
        product.price = "{:.2f}".format(product_calculation)
        rrp_calculation = int(product.rrp) * 0.011
        product.rrp = "{:.2f}".format(rrp_calculation)
        
    current_sort = f'{sort}_{direction}'

    context = {
        'products': products,
        'search_term': query,
        'current_categories': categories,
        'current_sort': current_sort,
        'current_brand': brand,
        'brand_name': brand_name,
    }

    return render(request, "products/products.html", context)


def product_detail(request, product_id):
    """ A view to show individual product information """
    product = get_object_or_404(Product, pk=product_id)
   
    image_list = product.images
    image_list = ast.literal_eval(image_list)
    product.images = image_list
    product_calculation = int(product.price) * 0.011
    product.price = "{:.2f}".format(product_calculation)
    rrp_calculation = int(product.rrp) * 0.011
    product.rrp = "{:.2f}".format(rrp_calculation)

    context = {
        'product': product,
        'on_product_detail_page': True,
    }

    return render(request, "products/product_detail.html", context)


@login_required
def add_product(request):
    """ Admin add a product to the store """
    if not request.user.is_superuser:
        messages.error(request,
                       'Sorry, only store owners have premission to do that.')
        return redirect(reverse('home'))

    if request.method == 'POST':
        form = ProductForm(request.POST)
        if form.is_valid():
            form_submit = form.save(commit=False)
            image_validation = form.cleaned_data['images']
            price_validation = form.cleaned_data['price']
            rrp_validation = form.cleaned_data['rrp']
            form_submit.price = "{:.2f}".format(int(price_validation) / 0.011)
            form_submit.rrp = "{:.2f}".format(int(rrp_validation) / 0.011)
            form_submit.images = f"['{image_validation}']"
            if Product.objects.filter(sku=request.POST['sku']).exists():
                messages.error(request, 'Product with that SKU already exists')
            else:
                form_submit.save()
                form.save()
                messages.success(request, 'Successfully added product!')
            return redirect(reverse('add_product'))
        else:
            messages.error(request,
                    'Failed to add product. Please ensure the form is valid.')
    else:
        form = ProductForm()

    template = 'products/add_product.html'
    context = {
        'form': form,
    }

    return render(request, template, context)


@login_required
def edit_product(request, product_id):
    """ Edit a product in the current store """ 
    if not request.user.is_superuser:
        messages.error(request, 'Sorry, only store owners have premission to do that.')
        return redirect(reverse('home'))
    product = get_object_or_404(Product, pk=product_id)

    if request.method == 'POST':
        form = ProductForm(request.POST, instance=product)
        if form.is_valid():
            form_submit = form.save(commit=False)
            image_validation = form.cleaned_data['images']
            form_submit.images = f"['{image_validation}']"
            form_submit.save()
            form.save()
            messages.success(request, 'Successfully updated product!')
            return redirect(reverse('profile'))
        else:
            messages.error(request, 'Failed to update product. Please ensure the form is valid.')
    else:
        form = ProductForm(instance=product)
    
    template = 'products/edit_product.html'
    context = {
        'form': form,
        'product': product,
    }

    return render(request, template, context)


@login_required
def delete_product(request, product_id):
    """ Delete a product from the store """
    if not request.user.is_superuser:
        messages.error(request, 'Sorry, only store owners have premission to do that.')
        return redirect(reverse('home'))

    product = get_object_or_404(Product, pk=product_id)
    product.delete()
    messages.success(request, 'Product deleted!')
    return redirect(reverse('products'))