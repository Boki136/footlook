# Project Testing 
 
## **Table Of Contents:**
1. [Responsive Testing](#responsive-testing) 
2. [Validation Testing](#validation-testing) 
3. [User Stories Testing](#user-stories-testing) 
4. [Bugs](#bugs) 
 


### **Responsive Testing**

- _Homepage_

#### Changes made on screens smaller then 750px

    - decreased hero text font-size
    - reduced width & height for shopping bag div
    - decreased price bubble size & font-size
    - Reduced product image under New arrivals section & next button font size and height
    - Decreased testimonial image width 
    - Enabled shop now button to be visible without hover within category boxes


- _Category Page_


Few minor tweaks made on category page to improve responsiveness


    -   Moved RRP to the top of product box
    -   Reduced product image to fit correctly on the page


- _Product Detail Page_


No changes required on this page. All the elements are fully responsive.


- _Basket Sidebar_

Couple of minor margin and padding changes on screen smaller then 550px. Changes to product box where images comes on the top and product detail goes underneat and acquires full width.


- _Checkout Page_

Small margin and padding changes in order details section. Image reduced by 50px to fit the space withou need to scroll



- _Checkout Sucess Page_

Small changes around product details section. Product info placed under image.


- _Allauth Pages_

#### Changes made on screens smaller then 500px

    - Removed absolute positioning & all its properties.
    - Made form content full width & removed border radius
    - Decresed font size and padding in why sign up section

- _Profile Pages_

#### Changes made on screens smaller then 500px

    - Moved product management to it's own line
    - Reduced font size of form labels
    - Changed order info popup to position absolute and set height to 100% to remove bug with visibility


### **Validation Testing**

#### **HTML Validation**

I used the [W3C Markup Validation Service](https://validator.w3.org/) to check the HTML of all URLs

- Homepage Validation_

Homepage returned a lot of errors mainly around spaces in href attribute and some typos

![](media/readme-documentation/html-v-1.png)

I managed to resolve all the errors.

- _Category Page Validation_


Category page returned a couple of errors regarding space in href atrributes & a tag not allowed to be child of ul tag

![](media/readme-documentation/html-v-2.png)

All the errors are resloved


- _Product Detail Page Validation_

No errors found on product details page

- _Checkout Page Validation_

No errors found on checkout page

- _Checkout Success Page Validation_

No errors found on checkout sucess page

- _Profile Page Validation_

No errors found on profile page

- Add/Edit Product Page Validation_

No errors found on both pages


#### **CSS Validation**

I used [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) to check the CSS validity, the code passed the validator with no errors.

![](media/readme-documentation/css-validation.png)

#### **JS Validation**

I used [JS Hint Validator](https://jshint.com/) to check the script files. No errors were highlighted, just warnings stating missing semicolons and warnings of template literal syntax being available in ES6.

![](media/readme-documentation/js-validation.png)

#### **PYTHON Validation**

I have used Problems tab in command line to go through each file and check if Python is PEP8 compliant. In most files erros were 'line to long', 'line containing trialing space', 'no new line at the end of the file'. I managed to resolve most of the warnings and issues.


### **User Stories Testing**

USER STORY TEST | OUTCOME | STATUS | 
-------------------- | -------------------------------| ----------| 
**Users should be able to navigate through the store using navigation & footer links.** | All the navigation & footer links are working correctly, and redirecting users to correct pages. Some links are showing depending on user log-in such as my profile and logout which are all tested and are showing correctly. | Approved | 
 **Users should be able to navigate through products and categories.** | All product categories are filtering assigned products accordingly and informing the user in which category they are currently in. Each product has correct information populated and can be accessed from the dedicated category page. | Approved | 
 **Users should clearly see all content and have correct colour contracts between elements**  |   Whole website was checked with [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/). I resolved all the errors regarding missing titles within button and anchor elements. There are small contrast issues which I believe are not too much of a problem as there is a clear contrast between black and white so I decided to leave the colour scheme as is.      |   Approved        |
**Users should be able to log in / log out.**  |   Users with existing accounts are able to log in through profile icon and access their profile information. Also, they can log out through their profile page or on mobile device through log-out button in the mobile menu      |   Approved        |
**Users should be able to register & delete their account.**  | Un-logged users are able to register through profile icon also by selecting register here CTA or through sign-up link on the sign-in page. Once they have an account set-up, to delete the account they have to select 'Delete' button at the bottom of the page. I've implemented a confirmation dialog to prevent accidental clicks and double-check their action.    |   Approved        |
**Users should be able to search for products & view them.**  |   Users can search for product in couple of ways: Using the search bar, selecting a category, selecting a brand. From the category page, users have abilities to filter the products and preview all of them. Each product has learn more cta which leads to product detail page containing all the relevant product information.    |   Approved        |
**Users should be able to add product to their basket.**  |   All the users are able to add a product to their basket from product page by first selecting desired shoe size and clicking on 'Add to basket' by doing so they get a confirmation message that the product was added to their basket.     |   Approved        |
**Users should be able to view products in the basket and edit/remove them.**  |   By opening up basket side-bard users have option to change quantity of items in the basket or completely remove it. All of this is done without refreshing the page thanks to the Ajax post request handlers.   |   Approved        |
**Users should be able to checkout and pay for the products using payment integration system.**  |   Users are able to checkout and pay for their order using their address details and credit card thanks to Stripe payments integration. All the payments are secured and webhooks are handling any type of form or user error which can prevent the order from creation and result in charging customer for the order they might not receive.    |   Approved        |
**Admin should be able to add products. Edit, remove, & read them**  |   Users with admin access are able to add products, edit and remove them. To add a product admin has to access the product form addition through profile page. To edit or remove the product they have to navigate to the product they want to make changes to and from there select the options. I have implemented a confirmation dialog to prevent accidental clicks and double-check their action.     |   Approved        |
**Users should be able to edit their profile details.**  |  By navigation to their profile, users can safely change their username and shipping details. I've implemented additional checks for username field preventing the user from submiting the same username, already existing username & empty field. Als, for the shipping details, users are only able to save details if all required fields are filled in.     |   Approved        |
