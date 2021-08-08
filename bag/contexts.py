from decimal import Decimal
from django.conf import settings
from django.shortcuts import get_object_or_404
from products.models import Product
import ast


def bag_contents(request):

    bag_items = []
    total = 0
    product_count = 0
    bag = request.session.get('bag', {})

    for item_id, item_data in bag.items():
        if isinstance(item_data, int):
            product = get_object_or_404(Product, pk=item_id)
            image_list = product.images
            image_list = ast.literal_eval(image_list)
            product.images = image_list
            price = int(product.price) * 0.011
            total += item_data * price
            product_count += item_data
            bag_items.append({
                'item_id': item_id,
                'quantity': item_data,
                'product': product,
                'image_list': image_list,
            })
        else:
            product = get_object_or_404(Product, pk=item_id)
            image_list = product.images
            image_list = ast.literal_eval(image_list)
            product.images = image_list
            for size, quantity in item_data['items_by_size'].items():
                total += quantity * (int(product.price) * 0.011)
                product_count += quantity
                bag_items.append({
                    'item_id': item_id,
                    'quantity': quantity,
                    'product': product,
                    'size': size,
                    'image_list': image_list,
                })

    if total < settings.FREE_DELIVERY_TRESHOLD:
        delivery = settings.STANDARD_DELIVERY_COST
        free_delivery_acquire = settings.FREE_DELIVERY_TRESHOLD - total
    else:
        delivery = 0
        free_delivery_acquire = 0

    grand_total = Decimal(delivery + total)

    context = {
        'bag_items': bag_items,
        'total': total,
        'product_count': product_count,
        'delivery': delivery,
        'free_delivery_aquire': free_delivery_acquire,
        'free_delivery_treshold': settings.FREE_DELIVERY_TRESHOLD,
        'grand_total': grand_total,
    }

    return context