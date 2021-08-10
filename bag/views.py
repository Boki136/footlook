from django.shortcuts import reverse, redirect, HttpResponse
from django.contrib import messages
import ast
from products.models import Product

# Create your views here.


def add_to_bag(request, item_id):
    """ Add a quantity of the specified product to the shopping bag """

    product = Product.objects.get(pk=item_id)
    image_list = product.images
    image_list = ast.literal_eval(image_list)
    product.images = image_list
    quantity = int(request.POST.get('quantity'))
    redirect_url = request.POST.get('redirect_url')
    size = None

    if 'product_size' in request.POST:
        size = request.POST['product_size']    
    bag = request.session.get('bag', {})

    if size:
        if item_id in list(bag.keys()):
            if size in bag[item_id]['items_by_size'].keys():
                bag[item_id]['items_by_size'][size] += quantity
                messages.success(request, f"{quantity}x {product.name}")           
            else:
                bag[item_id]['items_by_size'][size] = quantity
                messages.success(request, f"{quantity}x {product.name}")        
        else:
            bag[item_id] = {'items_by_size': {size: quantity}}
            messages.success(request, f"{quantity}x {product.name}")  

    context = {
        'product': product,
        'image_list': image_list,
    }

    request.session['bag'] = bag
    return redirect(redirect_url, context)


def update_bag(request, item_id):
    """Adjust the quantity of the specified product to the specified amount"""

    quantity = int(request.POST.get('quantity'))
    redirect_url = request.POST.get('redirect_url_bag')
    size = None
    if 'product_size' in request.POST:
        size = request.POST['product_size']
    bag = request.session.get('bag', {})

    if size:
        if quantity > 0:
            bag[item_id]['items_by_size'][size] = quantity
        else:
            del bag[item_id]['items_by_size'][size]
            if not bag[item_id]['items_by_size']:
                bag.pop(item_id)

    request.session['bag'] = bag
    return redirect(redirect_url)


def remove_from_bag(request, item_id):
    """Remove the item from the shopping bag"""
    try:
        size = None
        if 'product_size' in request.POST:
            size = request.POST['product_size']
        bag = request.session.get('bag', {})

        if size:
            del bag[item_id]['items_by_size'][size]
            if not bag[item_id]['items_by_size']:
                bag.pop(item_id)

        request.session['bag'] = bag
        return HttpResponse(status=200)

    except Exception as e:
        return HttpResponse(status=500)