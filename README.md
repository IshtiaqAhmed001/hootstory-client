# Go Digital - A digital Agency providing 360° solutions

Go Digital is a digital agency providing a wide range of affordable packages for everyone. We have worked with more than 150+ companies till now. We offer pixel perfect designs, strategies and consultancy with results!

## Pages/Features
This website has 05 pages: Home, About, Packages, Dashboard and Login/Registration.Dashboard is a nested route where Orders,add review,add/delete service, make admin pages are available. 
Some pages are public and some are protected,which means user needs to be logged in to access those pages/features and among those pages some pages are accessible only when the logged in user is an Admin.


Pages               | Details
-------------       | -------------
Home                | main landing page includes services,reviews etc..
About               | Glipmse of the company 
Add a Review        | let's a user to add a review to home page.(Login required)
Orders              | let's user check his/her orders (Login required)
Add a New Service   | let's user to add new service item. (Needs to be Admin)
Delete a Service    | let's user to delete services (Needs to be Admin)
Make Admin          | let's an Admin to make another user admin.
Login/Register      | Login and Registration page

### Project Details

To make the frontend(client side) I have used React,which is a JavaScript Library. I also implemented react router here so the pages of the site loads faster than the regular websites.Then firebase authentication system and private route and JWt token for the security.
For styling I have used a combination of vanilla css and Material-Ui.

For backend (server side) used node and express as a framework.
And lastly for storing data we used mongodb which is a nosql database.


### Live client site link:
https://go-digital-agency.web.app

### Live server site link:
link: https://floating-lowlands-12971.herokuapp.com