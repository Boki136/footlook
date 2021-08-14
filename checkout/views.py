from django.shortcuts import render, reverse, redirect
from django.contrib import messages

from .forms import OrderForm


def checkout(request):
    bag = request.session.get('bag', {})
    if not bag:
        messages.error(request, 'Your bag is empty')
        return redirect(reverse('products'))

    order_form = OrderForm()
    template_view = 'checkout/checkout.html'
    context = {
        'order_form': order_form,
    }

    return render(request, template_view, context)