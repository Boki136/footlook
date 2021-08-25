from django.shortcuts import render, get_object_or_404, redirect
from django.contrib import messages
from django.http import HttpResponse

from .models import UserProfile
from .forms import UserProfileForm
from django.contrib.auth.models import User


def profile(request):
    """ Display the user's profile. """
    profile = get_object_or_404(UserProfile, user=request.user)
    
    if request.method == 'POST':
        user = request.user
        form = UserProfileForm(request.POST, instance=profile)
        print(form.errors)

        
  
        if 'username' in request.POST:
            if user.username == request.POST['username']:
                messages.warning(request, 'You have used the same username')
                return redirect('profile')
            username = request.POST['username']
            user.username = request.POST['username']
            if User.objects.filter(username=username).exists():
                    messages.error(request,
                                    "Username already exists, please user another one"
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
    orders = profile.orders.all()

    template = 'profiles/profile.html'
    context = {
        'form': form,
        'orders': orders,
    }
    return render(request, template, context)
