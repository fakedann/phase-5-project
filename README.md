# Phase-5 Project
## _Bluray Mini Store_

## Features

- Create a robust and smooth data flow with the help of useContext
- Showcase the ability to link diverse types of files (image, video, etc) to your models with Active Storage
- Closely replicate the behavior of a payment system with Paypal 
- Persist shopping carts with Local Storage

While this project closely follows the practices and standards set for the Phase-4 Project on my Flatiron School's journey, the main difference set for this one would be the intent to break some of the boundaries that have been established. As developers, we need to always be in the lookout for new technologies that can improve our workspace. As such, the ability to read and implement features that we are not familiar with is an essential tool. This project tries to solve some of those challenges by taking advantage of technologies that I was not aware of such as useContext, Active Storage, Paypal and Local Storage.

## Setup

The following indications only apply if the user wishes to run the application locally. There is a deployed version of the app in the Render domain that you can [reach with this link.](https://phase-5-project-acnb.onrender.com). Otherwise, follow the instructions below to install it locally.

### Requirements

The project relies on npm and node.js capabilities. [ First, install these components ](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). After forking and cloning this repository into a local directory in your pc, you should be able to run the following command to install all of the third-party components necessary:
```sh
 npm install
```
Locate the src folder and manually check that the package.json file counts with react-paypal, react-router-dom, and react-toastify under dependencies. If they did not install automatically, here are the places to manually add them:
- React Router: https://www.npmjs.com/package/react-router
- React Paypal: https://www.npmjs.com/package/@paypal/react-paypal-js?activeTab=readme
- Toasts: https://www.npmjs.com/package/react-toastify/v/8.0.0 (Make sure you are using version 8.0.0)

Additionally, you need to install some features that will manage the backend side of things. Mac users tend to count with built-ins Ruby interpreters, but here's a guide for Microsoft users and outdated versions of Ruby: https://www.ruby-lang.org/en/downloads/. After updating your Ruby interpreter, you must also download Rails web framework:

- Rails: https://guides.rubyonrails.org/v5.1/getting_started.html#installing-rails

This project relies on a powerful tool called Active Storage. It allows Rails to link models with complex data files such as images and videos. In order for it to work, you must follow specific instructions to set it up. By forking and cloning this repository, the gemfile and all of the other files should be ready to go. However, in the case that they are not, here are some helpful resources to manually set it up:
- https://www.youtube.com/watch?v=_rLMRd676-I&t=1170s&ab_channel=Deanin
- https://guides.rubyonrails.org/active_storage_overview.html

Once everything is succesfully set up, open the terminal where you forked/cloned this repository and type in the following command:

```sh
 rails s
```
This will activate the server capabilities offered by Rails. This will in essence work as your connection to the database/backend side of the project. In here, the user can check useful information as to how Rails operates under the hood. If there's any error that the backend wishes to notify the frontend about, they will also appear in detail on this console.

Some users, films, and ratings have been created beforehand in order to test the application's functionality. In order to get them started, you must open another terminal where you forked/cloned this repository and type this command:
```sh
 rails db:seed
```
This will ensure that those premade materials will get created. **It is worth nothing that the payment system of this application is not intended for real life purposes, which means that in order to avoid the usage of real cards, some testing cards have been provided by Paypal**. Down below, a list of cards will be provided. You must enter the numbers exactly as they are described, but the expiration date and CSC number can be random:
- 4005519200000004
- 4012000033330026
- 4012000077777777
- 4012888888881881
- 4915805038587737


In addition, the user needs to open a new terminal. The user must also locate the same folder that contains this repository, but this time the user must get into the /client folder. Once you have locatated this folder and opened it, type in the following command:

```sh
 npm start
```

Once you have typed this command, this will enable the frontend side of the project. A new tab on your browser will open that will showcase the project and all of its interactive features.


## Usage

**Home page**
This page handles the logging and signing features. When you are creating a new account, here are some restrictions that you must comply with:
- Email must be righly formatted: somenameor07@gmail.com
- Passwords must be at least 6 characters long
- Names cannot contain numbers or symbols
- Address cannot contain symbols
- You must select an image for your profile

useContext is a hook that allows users to enable global values to be shared across your application in an efficient manner. Mainly, the information regarding the logged in user is shared throughout all of the application thanks to this tool.

**Browse**
This section will allow you to search for available films on sale. There is a filter on the top of the page that will show you by default the last 5 films added to the collection, but you could also choose to display low rated/high rated films or the whole collection.
When you are browsing through the films, they will display on the left the title, the average rating given by users, and a synopsis for it. On the right, each film will count with a poster image. If you hover over the image, you will find additional information such as the director's name, the year it was released, the genre and runtime of the film. Lastly, on the bottom left, there will be "add to cart" button that will start processing your future purchases. Right next to it, you can look at the film's price. If you select a certain film succesfully, you should see a Toast notification on the top center indicating that it was succesfully added to your cart. You can go to any other page or refresh this page as many times as you like, but the films added to your cart will be persisted thanks to the magic of local storage. 

**Cart**
This is where you finalize your purchases. After selecting the films that you wish to buy from the browse section, you must head over to this section. Before paying, you can delete a specific film that you do not want to purchase anymore, or delete the whole cart if you wish as well. Once you are ready to buy your films, click on any of the payment buttons. All of the data is processed and protected by Paypal. If the purchase can be successfully processed according to Paypal's server, it will return a JSON object that the project runs through the backend in order to finalize the purchase and create the according model associations. **The address in the form of payment must match the one linked to the website's profile.**

**History**
This page will display your purchase history. You must have already gone through the whole process of selecting a film through browse and then paying for it through your cart in order to see any information displayed in here. Once you do, it will show you the amount of times you have bought the same film and your rating (if you have provided one for it already). Additionally, you will be able to either delete or change the rating you provided for each film through this page. 

**Leave a Rating**
In order to submit a rating, you must first search for a specific film. The search bar is case insensitive, but there are not partial matches. For example, if there's a film titled "Burning", but you submit 'Burnin', with only a 'g' missing, the page will tell you that nothing could be found with that title. If you provide a matching title, a poster for the film and additional information will be displayed. Once you have reached this point, you can now submit your comment if you meet a few conditions:
- You must already have purchased the film
- You cannot submit a second rating for a film. If you wish to change or delete your already existing rating, you must do it through your history page.

#### Contributing
Suggestions are welcome in terms of the application's performance or presentation. For direct contact, use the following email address: daniel07escalona@gmail.com. 

#### Authors and Acknowledgment
**Author: Daniel Escalona. Student at [Flatiron School.](https://flatironschool.com/welcome-to-flatiron-school/?utm_source=Google&utm_medium=ppc&utm_campaign=12728169833&utm_content=127574232664&utm_term=flatiron&uqaid=513799628630&CjwKCAiA4KaRBhBdEiwAZi1zzgCEBEdI6285I6gmLUyI5Pw_8YNLXh1P1oRIGf8t0fXozErvGMW5FRoCG1MQAvD_BwE&gclid=CjwKCAiA4KaRBhBdEiwAZi1zzgCEBEdI6285I6gmLUyI5Pw_8YNLXh1P1oRIGf8t0fXozErvGMW5FRoCG1MQAvD_BwE)**
**This project would not have been possible without the following resources:**

https://www.npmjs.com/package/react
https://flatironschool.com/courses/coding-bootcamp/
https://rubyonrails.org/
https://guides.rubyonrails.org/active_storage_overview.html
https://developer.paypal.com/home


## License

MIT
