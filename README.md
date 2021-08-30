# FOOTLOOK

## Project Overview

Footlook is an e-commerce website selling footware for both Men & Women. Our shoe selection consists of Adidas shoes only and spans over three sub-brands. Our primary goal is to offer a user seemles buying journey with rich content & simple to use online platform.
We offer all our users ability to preview their orders and securely checkout out with their preferred shoes. 



### **The live site can be viewed [here](https://jobbing-hiring-app.herokuapp.com/)**.
     

# **Table Of Contents:**

- **UX**

  - Research and Analysis Phase
    - Business decision, long-term goals
    - User Stories
  - Design Phase

    - Sitemap
    - Colour pallet & Typography
    - Wireframes

  - **Features & Layout**

    - Homepage
    - Contact Us
    - Find a Job page
    - Login page
    - Register page
    - Profile page
    - Post a job page
    - Edit a job page

  - **Acknowledgements**

- **Technologies & Resources Used**

  - Languages Used
  - Frameworks & Processors
  - Workspace, version control and Repository storage
  - Integrations
  - Resources & Media

- **Testing & Deployment**
  - Validation & API testing
  - Testing Users Stories
  - Database Accessing Test
  - Testing Responsiveness
  - Bugs
  - Deployment

# **UX**

The website is designed with simplicity & effectiveness in mind, allowing users to quickly preview desired products and checkout within minutes. All product content is clearley structured and very thorough. Design is very clear and consistent which helps the user to navigate through the website with ease. Upon each user action, system either informs them or asks for the premission (deleting product off the basket/checkout. Adding to basket etc.)


# **Research and Analysis Phase**

## **Brainstorming Ideas & User Stories**

For this project, I wanted to build an e-commerce website, but I was unsure at the start where to get the product data. After sucessfully finding shoes product data, I decided to create Adidas oriented footware shop. After some research on usual brand colours, and website funcitonality I decided to proceed with planning and wireframing/designing.

**Long term goals:**

- Allow users to log-in using social media accounts.
- Creating tracking system within the profile page
- Implementing auto-address plug in to help the users to quickly fill in their details
- Adding more products and batter filtering system (shoe color, size etc.)
- Real life inventory 

### **User Stories**

![colour pallet and fonts](media/user-stories.png)

# **Design Phase**

## **Sitemap**

Sitemap creation allowed me to brainstorm website structure and decide which pages will be included - view [here](media/footlook-sitemap.png).

## **Colour palette & Typography**

Colour Pallet was determined while re-searching for usual brand colours and darker theme options. Typography was selected on purpose to display nice headings and clean body text.

![colour pallet and fonts](media/colour_palette.png)

## **Wireframes**

All wireframes were created in InVision Studio, and all of them were created as deatailed as possible to allow development/implementation phase to focus on code specifically. They can all be previewed here [here](media/wireframes).


## **Deployment**

### <ins>Deployment to Heroku</ins>

- Setup files that Heroku needs to connect correctly:

requirements.txt: this files list all the dependencies you have installed on the project

Procfile: Heroku looks to know which file runs the app (delete the blank line at the bottom of Procfile as it may cause problems when running on Heroku).

- Setup Process

Go to Heroku, once logged into your dashboard, under New select ‘Create new app’:

![](media/readme-documentation/deploy-3.png)

Create app name (name must be unique, I would recommend using minus symbol instead of spaces.
Choose the closest region to you & create the app.

![](media/readme-documentation/deploy-1.png)

Navigate to resources tab and select Heroku Postgres under "Add-ons". 

Return back to your gitpod console and install dj_database_url & psycopg2-binary
pip3 install dj_database_url 
pip3 install psycopg2-binary  (remember to freeze the requirements pip3 freeze > requirements.txt)

Afterwards, navigate to settings.py. Import dj_database_url & comment out default databse settings, replacing them with postgres database.
You can grab database URL from heroku app under "settings" > reveal config vars > DATABASE_URL


Afterwards,  run migrations with gitpod command line. Load fixtures & create a superuser.

Back in your settings.py, implement if/else to show correct database based on current hosting & install gunicorn with pip command

![](media/readme-documentation/deploy-2.png)

Navigate to you gitpod command and log in to heroku using heroku login. After logging in disable static file collecting
heroku config:set DISABLE_COLLECTSTATIC=1 --app yourappname

Lastyl, add allowed hosts to settings.py & deploy app

ALLOWED_HOSTS = ['yourappname.herokuapp.com', 'localhost']
To deploy app, commit and push all your files and the input git push heroku master


- Setup automatic deployment from your GitHub repository:

Navigate to the Deploy tab within Heroku, select GitHub as deployment method.


Ensure your GitHub profile is displayed and search for the desired repository. If the wanted repo is visible in the list, select "Connect".

Click on the ‘Settings' tab, navigate to web and search for django secret key generator, after taking one paste it in your COnfig Vars back in Heroku under name "SECRET_KEY"

Then select ‘Reveal Config Vars’



Enter the variables (from the env.py) file to tell Heroku which variables are required securely:

- IP
- PORT
- MONGO_DBNAME
- MONGO_URI
- SECRET_KEY

Back in your Gitpod bash, commit two new files (requirements.txt and Profile) and push to GitHub.

Back in Heroku, under the Deployment tab, you can now safely 'Enable Automatic Deployment', then 'Deploy Branch'.
The process should take a minute or two. After it's done, you will get the confirmation "your app is successfully deployed."
