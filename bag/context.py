from django.conf import settings

def bag_contents(request):

    bag_items = []
    total = 0
    product_count = 0

    if total < settings.FREE_DELIVERY_TRESHOLD:
        delivery = total + settings.STANDARD_DELIVERY_COST
        free_delivery_acquire = settings.FREE_DELIVERY_TRESHOLD - total
    else:
        delivery = 0
        free_delivery_acquire = 0

    grand_total = delivery + total

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