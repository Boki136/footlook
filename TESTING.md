# Project Testing 
 
## **Table Of Contents:**
1. [Responsive Testing](#responsive-testing) 
2. [Validation Testing](#validation-testing) 
3. [User Stories Testing](#user-stories-testing) 
4. [Manual Feature Testing](#manual-feature-testing) 
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


### **Manual Feature Testing**



FEATURE CATEGORY | FEATURE | OUTCOME | STATUS | 
--------------------| -------------------- | -------------------------------| ----------| 
| Navigation | Logo | Footlook logo correctly redirects back to the homepage | Approved | 
| Navigation | Navigation Links | Men & Women categories are correctly redirecting to category page which is only showing products under selected category. By expanding brands dropdown and selecting one of the brands users are redirected to category page showing only product under selected brand.| Approved | 
| Navigation | Search Bar | Search the database using the query as a keyword and returns any products that have the keyword in their name or description or. On mobile devices, search is available in the mobile menu and it works in the same way.| Approved | 
| Navigation | Basket icon | On click event basket sidebar open on the right side. On mobile version basket is availabe through fixed icon which follows the user across the page. | Approved | 
| Navigation | Profile icon | If the user is authenticated, on the click event user will be re-directed to the profile page. Otherwise, on hover  event user is presented with login modal which contains of Sign-in & register buttons which are correctly redirecting to the sign in or signup page | Approved | 
| Footer | Footer links | Quick links are changing based on user authentication. Logged-in user has access to my profile, my orders. Logged-out user has access to Sign-in and register links which are all linking to correct pages. Shop links are directing correctly to category page and showing product based on category or brand selection. Social icons are directing user to correct social media channel.| Approved | 
| Homepage | Hero Section | Shop now button directs the user to product listing page showing all products and social media links are directing users to correct social media channels. | Approved | 
| Homepage | New arrivals carousel | Users are redirected to a correct product detail page when selecting 'Learn more' button. | Approved | 
| Homepage | Categories section | Users are redirected to a correct category page showing product under selected category | Approved | 
| Profile Page (only authenticated users) | Sign-out icon | On click event users are brought to sign-out confirmation page where they can choose if they want to sign-out or not. | Approved |
| Profile Page (only storeowners) | Product Management | On click event users are brought to add a product form where they can set up a new product in the store. | Approved |
| Profile Page (only authenticated users) | Personal details| On edit button click event username field is enabled for editing. Additional logic is applied to prevent the user from submitting same username, already existing username & empty field. Also users are able to cancel any changes with cancel button which appears during the editing process. | Approved |
| Profile Page (only authenticated users) | Shipping details| On edit button click event shipping details fields are enabled for editing. Additional logic is applied to prevent the user from submitting empty required feilds (everything except address line 2 & phone number), also users are not able to submit coutry default option from the country dropdown. Users are able to cancel any changes with cancel button which appears during the editing process. In case users don't have an address saved they are presented with 'Add a new address' CTA which then shows all the fields and let's them input a new address. | Approved |
| Profile Page | Delete account | On click event users are presented with the confirmation dialog double-checking the action and preventing accidental clicks. After selecting confirm users are redirected to the homepage and the user is removed from the database. Message success is showing to inform them the account was deleted sucessfully.  | Approved | 
| Category Page | Shop by brand | Product are filtered correctly based on the brand selection | Approved | 
| Category Page | See all product filter | Showing all products under all categories | Approved | 
| Category Page | Sort by filter | Showing all products filtered correctly | Approved | 
| Category Page | View product detail | Users are redirected to a correct product detail page when selecting 'Learn more button' | Approved | 
| Product Detail Page | Additional images | When selecting any of the additional images, they are presented as the main image. | Approved | 
| Product Detail Page | Adding products to the basket | If users attempt to add a product without selecting a size the error message is shown to indicate size needs to be selected. Otherwise, item is added to the basket and users are presented with the success message to inform them of their actions. | Approved | 
| Product Detail Page | Edit / Remove product | This section is only available to storeowners, logic is implemented to check if the user is authenticated and if the role is superuser. When selecting edit a product, user is redirected to edit a product form pre-filled with current product information. When attempting to remove the product, users are presented with the confirmation dialog double-checking the action and preventing accidental clicks. | Approved | 
| Basket Sidebar | Edit product quantity & remove product | Users are able to edit product quantity by decreasing or increasing the number of the desired item. The change is reflected without need to refresh the page thanks to Ajax post handler. To remove the product users have to click on 'Remove' CTA which removes the item form the basket and it's reflected automatically. All product cost calculation, delivery charge & basket subtotal are calculated automatically on the product quantity change event. | Approved | 
| Basket Sidebar | Proceed to checkout | Users are able to proceed to checkout by selecting 'Checkout button' all the curent basket contents are correctly transferred over to the checkout. | Approved | 
| Checkout| Back to shopping | Users are redirected back to the category page when selecting 'Back to shopping' CTA. | Approved | 
| Checkout| Shipping details | Authenticated users have access to save their address details to their profile to ensure a faster checkout. Otherwise user are presented with create an account or login options to save shipping information. | Approved | 
| Checkout| Order details | Users can clearly preview their order brakedown, subtotal, delivery & total cost | Approved | 
| Checkout| Placing the order | Users are able to checkout with real card payments and are presented with loading overlay during order processing to inform them their order is currently being processed. | Approved | 
| Checkout Success| Order Information| Users can clearly see their order information: order details, products ordered and customer details. If user is logged-in the order is saved to their profile automatically under All Orders section. | Approved | 
| Add Product | Adding a product | This page is only available to storeowners, if other loggedin users try to access it via url they will be redirected back to the product page and message will display to them saying only storeowners are allowed to do that. There is additional logic applied to ensure all the product fileds are supplied in the correct format. Starting with the SKU field, if the product with the same SKU exists form will return an error. All numeric fields are only excepting numbers and two decimal places (rrp, price & discount). Rating is only accepting numbers from 1 - 5.  | Approved | 
| Edit Product | Editing a product | This form has the same logic applied as add a product form. The only difference is that the form is pre-populated with selected product information.  | Approved | 

