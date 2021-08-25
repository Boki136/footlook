from django import forms
from .models import UserProfile


class UserProfileForm(forms.ModelForm):
    class Meta:
        model = UserProfile
        exclude = ('user',)

    def __init__(self, *args, **kwargs):
        """
        Add placeholders and classes, remove auto-generated
        labels and set autofocus on first field
        """
        super().__init__(*args, **kwargs)
        placeholders = {
            'default_phone_number': 'default_phone_number',
            'default_postcode': 'Postal Code',
            'default_city': 'City',
            'default_address_line_1': 'Address Line 1',
            'default_address_line_2': 'Address Line 2',
            'default_county': 'County',
        }

        self.fields['default_address_line_1'].widget.attrs['autofocus'] = True
        for field in self.fields:
            if field != 'default_country' and field != 'default_address_line_2' and field != 'default_phone_number':
                self.fields[field].required = True
                if self.fields[field].required:
                    placeholder = f'{placeholders[field]} *'
                else:
                    placeholder = placeholders[field]
                self.fields[field].widget.attrs['placeholder'] = placeholder
            self.fields[field].widget.attrs['class'] = 'profile_input'
            self.fields[field].label = False
