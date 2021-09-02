from django.shortcuts import render, get_object_or_404, redirect
from django.contrib import messages
from django.contrib.auth.decorators import login_required

from .models import UserProfile
from .forms import UserProfileForm, UserDeleteForm
from django.contrib.auth.models import User


@login_required
def profile(request):
    """ Display users personal & shipping details
        Handle updating the details, and all the errors
     """
    profile = get_object_or_404(UserProfile, user=request.user)
    if request.method == 'POST':
        user = request.user
        form = UserProfileForm(request.POST, instance=profile)
        delete_form = UserDeleteForm(request.POST, instance=request.user)
        if delete_form.is_valid() and 'delete_profile' in request.POST:
            print('yes')
            user.delete()
            messages.success(request, 'Profile successfully deleted')
            return redirect('home')

        if 'username' in request.POST:
            if user.username == request.POST['username']:
                messages.warning(request, 'You have used the same username')
                return redirect('profile')
            username = request.POST['username']
            user.username = request.POST['username']
            if User.objects.filter(username=username).exists():
                messages.error(request,
                               "Username already exists, please use another one"
                               )
                return redirect('profile')
            else:
                if len(user.username) == 0:
                    messages.error(request, "Username cannot be empty")
                    return redirect('profile')
                messages.success(request, "Username updated successfully")
                user.save()
                return redirect('profile')
        if 'username' not in request.POST:
            if form.is_valid():
                if request.POST['default_country'] == '':
                    messages.error(request, "Please select valid country")
                    return redirect('profile')
                else:
                    form.save()
                    messages.success(request,
                                     'Shipping details updated successfully'
                                     )
                    return redirect('profile')
            else:
                messages.error(request, "Please fill in all required fields")
                return redirect('profile')

    form = UserProfileForm(instance=profile)
    delete_form = UserDeleteForm(instance=request.user)
    orders = profile.orders.all()

    template = 'profiles/profile.html'
    context = {
        'form': form,
        'orders': orders,
        'delete_form': delete_form,
    }
    return render(request, template, context)
