from decimal import Decimal
from django.conf import settings
from django.shortcuts import get_object_or_404
from products.models import Product


def bag_contents(request):

    bag_items = []
    total = 0
    product_count = 0
    bag = request.session.get('bag', {})

    for item_id, quantity in bag.items():
        product = get_object_or_404(Product, pk=item_id)
        price = int(product.price) * 0.011
        total += quantity * price
        product_count += quantity
        bag_items.append({
            'item_id': item_id,
            'quantity': quantity,
            'product': product,
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