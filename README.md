# PP5 - Advanced Frontend  - Gamer Verse

## Introduction
Gamer Verse is a content sharing platform to share reviews, posts and have social interactions with likeminded individuals about games. Users will be able to find posts and reviews relating to the gaming space, along with community events in local cities. This is the frontend section of the project built to work in conjuction with the backend DRF API as the database.

DEPLOYED FRONTEND (HEROKU) - [CLICK HERE](https://gamer-verse.herokuapp.com/)
DEPLOYED API (HEROKU) - [CLICK HERE](https://gamer-verse-drf-api.herokuapp.com/)
DEPLOYED BACKEND REPOSITORY - [CLICK HERE](https://github.com/Jbachtiger/ci-pp5-gamer-verse-drf-api)

![Mockup]()

## Table of Contents
- [User Experience (UX)](#user-experience)
    - [Site Purpose](#site-purpose)
    - [Site Goals](#site-goals)
    - [Epics](#epics)
    - [User Stories](#user-stories)
- [Design](#design)
    - [Wireframes](#wireframes)
    - [Colour Scheme](#color-scheme)
    - [Fonts](#fonts)
- [Agile](#agile)
- [Features](#features)
- [Future Development](#future-development)
- [Testing](#testing)
    - [Manual Testing](#manual-testing)
    - [Automated Testing](#automated-testing)
    - [Browser and Device Testing](#browser-and-device-testing)
    - [W3C Validator](#w3c-validatior)
    - [JS Lint](#js-lint)
    - [PEP8 Linter Results](#pep8-linter-results)
    - [Colour Contrast Checks](#colour-contrast-checks)
    - [Lighthouse Tool](#lighthouse-tool)
- [Solved Bugs](#solved-bugs)
- [Known Bugs](#known-bugs)
- [Technologies Used](#technologies-used)
    - [Languages Used](#languages-used)
    - [Frameworks, Libraries and Programs](#frameworks-libraries-and-programs)
    - [Databases](#databases)
- [Deployment](#deployment)
    - [Deploying to Heroku](#deploying-to-heroku)
    - [Forking Repository](#forking-repository)
    - [Cloning Repository](#cloning-repository)
- [Credits](#credits)
    - [Code](#code)
    - [Content](#content)
    - [Media](#media)
    - [Resources](#resources)
    - [Acknowledgements](#acknowledgements)


## User Experience
### Site Purpose
To be the go-to gaming community by sharing latest news, reviews, and interesting gaming trivia that users can then comment on and have friendly discussion to share their passion. 

### Site Goals
- To provide users with the latest news, reviews, and trivia about gaming
- To bring people together and create a sense of belonging
- To share with the community and create interesting discussions
- To share local events with each other

__Sites Ideal Users__
- An interest in gaming no matter what medium
- Looking for a gaming community to reach out and connect with like-minded individuals


### Epics
8 Epics were created which were further developed into 34 User Stories. The details of each epic along with the associated user stories can be found in the kanban board [here](https://github.com/users/Jbachtiger/projects/3). 

1. Initial Django REST and React Setup [#1](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/1)
2. Authentication [#2](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/2)
3. Navigation [#3](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/3)
4. Posts [#4](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/4)
5. Comments [#5](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/5)
6. Profiles [#6](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/6)
7. Events [#7](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/7)
8. Reviews [#38](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/38)

### User Stories 
Below are links to each of the individual user stories that were completed within the project's initial release.

1. Initial Django REST and React Setup
    - Install Django REST and supporting libraries for backend API [#8](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/8)
    - Install REACT and supporting libraries for frontend [#9](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/9)
    - Keep secret keys secure [#10](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/10)
    - Early deployment of the site to Heroku [#11](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/11)

2. Authentication
    - Register for an account [#12](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/12)]
    - Sign in with your account [#13](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/13)]
    - Logged in/out user status [#14](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/14)
    - Sign out [#15](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/15)
    - Access tokens [#16](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/16)

3. Navigation
    - View navbar on every page [#17](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/17) 
    - Navigate through pages without having to refresh each time [#18](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/18)
    - Clear sign in/sign up options [#19](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/19)
    - Infinite scroll [#20](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/20)

4. Posts
    - Create, View, Edit and Delete Posts [#21](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/21)
    - Like posts [#22](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/22)
    - View a list of liked posts [#23](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/23)
    - Search posts [#24](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/24)
    - Follow users [#25](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/25)

5. Comments
    - Create, Edit, View and Delete Comments [#41](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/41)
    - View comment date [#42](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/42)

6. Profiles
    - View profile pages [#26](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/26)
    - See most popular profiles [#27](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/27)
    - User statistics [#28](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/28)
    - Follow/Unfollow a user [#29](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/29)
    - View all posts by a specific user [#30](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/30)
    - Edit profile [#31](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/31)
    - Update username and password [#32](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/32)
    - View user's avatar [#33](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/33)
    - Set user avatar [#34](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/34)

7. Events
    - Create, Edit, View and Delete Event [#35](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/35)
    - Search all events [#36](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/36)

8. Reviews
    - Create, Edit, View and Delete Reviews [#37](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/37)
    - Search all reviews [#39](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/39)
    - View all reviews [#40](https://github.com/Jbachtiger/ci-pp5-gamer-verse/issues/40)

## Design
### Wireframes
- About
![About](docs/wireframes/about.png)

- Events
![Events](docs/wireframes/events.png)

- Forms
![Forms](docs/wireframes/forms.png)

- Homepage
![Homepage](docs/wireframes/homepage.png)

- Profile
![Profile](docs/wireframes/profile.png)

### Color Scheme

Various colors where used throughout the website. There was a main color scheme used with supporting color pallets also. Below are the various pallets that were used.

Main Pallete:

![Colour Palette](docs/color_scheme/colour_pallet.png)

Supporting Pallettes:

![Colour Palette](docs/color_scheme/colour_pallet_3.png)

### Fonts
The font used in this project was Roboto with a backup of sans-serif. It was chosen for its easy readability for users. Fonts were imported using Google Fonts.

## Agile
Throughout this project, an agile approach was used to develop the website. Each activity was broken down into smaller bite-sized more manageable actions from initially creating 8 Epics, which were then broken down into 34 smaller user stories. Each of the user stories then had an acceptance criterion and a list of tasks to complete. This made the overall project much more manageable to build. GitHub labels were used to categorise the user stories using the MoSCoW Prioritisation technique. This made it easy to categorise tasks by importance, prioritise the focus on these and get the project completed.

A kanban board was created using GitHub Projects [here](https://github.com/users/Jbachtiger/projects/3/views/1) to help keep track of all the tasks including Todo, In Progress and Done.

![Kanban in progress](docs/kanban/kanban.png)

![Kanban complete](docs/kanban/kanban_done.png)


## Features

### Homepage
A clean homepage with minimal distractions ensuring the users main focus is on the list of posts. The posts are displayed in a single list, styled as cards to give a clean seperation between posts. Each post includes a title, description and category.This provides the user with a good summary of information to see if they would like to interact with the post further by clicking into it and leave a comment on it or like it. Users do not need to be registered to view a post but do need to be logged in to like or comment on a post. There are different features and navbars available dependent on if a user is signed in or not. 

- Homepage signed in
![Homepage](docs/features/homepage_signed_in.png)

- Homepage signed out
![Homepage](docs/features/homepage_not_signed_in.png)

### Navbar
The navbar is featured on all pages, is responsive and has active links functionality so the the user knows which link they are on by hovering on it in the navbar. It is identical on all pages and is easy to use providing a good user experience. For mobile view, the navbar reduces to a burger menu. The purpose of this feature is to allow users to navigate all pages easily across all devices without having to use a back button to get to the next page. There is also authentication in place which will change what displays on the navbar depending on whether a user is logged in or not.

- Logged out Navbar

![Navbar](docs/features/navbar_signed_out.png)


- Logged in Navbar

![Navbar](docs/features/navbar_signedin.png)

### Sign in, Sign out and Sign Up
The website has a sign up functionality which then redirects the user to sign in once submitted and then once signed in there is an option to sign out.

![Sign up](docs/features/sign_up_form.png)

![Sign in](docs/features/sign_in_form.png)

![Sign in](docs/features/sign_out.png)

### Posts

- Post

![Post](docs/features/posts.png)

- Post page with comments section signed out

![Post with comments signed out](docs/features/post_comment_page_signed_out.png)

- Post page with comments section signed in

![Post with comments signed in](docs/features/post_comment_page_signed_in.png)

- Add post form

![Post form](docs/features/add_post.png)

- Edit post form

![Edit post form](docs/features/edit_post.png)

### Reviews

- Review

![Review](docs/features/reviews.png)

- Add review form

![Add review](docs/features/add_review.png)

- Edit review form

![Edit review](docs/features/edit_review.png)

### Events

- Event

![Event](docs/features/events_page.png)

- Add event form

![Add event](docs/features/add_event.png)

- Edit event form

![Edit event](docs/features/edit_event.png)

### Profiles
- Most Active Community Gamers

![Most active profiles](docs/features/popular_profiles.png)

- Profile (signed out)

![Profile signed out](docs/features/profiles_page.png)

- Profile (signed in)

![Profile signed in](docs/features/profiles_page_signed_in.png)

- Edit Profile

![Edit details](docs/features/edit_details.png)

- Edit Username

![Edit username](docs/features/edit_username.png)

- Edit Password

![Edit password](docs/features/edit_password.png)

### About

![About](docs/features/about_page.png)

## Future Development
- Like and comment ability for reviews and events pages
- Private messaging between users
- Group messaging between users
- Interactive gaming session where users can play browser games together on the website
- Gamer scoreboard
- Notifications for when a user recives a new follow, comment or like
- A contact form so user can get in touch with site admins/provide feedback


## Testing

### Manual Testing
I have manually tested all the features of the website making sure to go through them with different browsers and device sizes. I have also checked the features of the site against the original user stories to ensure they have all been actioned.

- CRUD functionality has been tested for the following: Posts, Reviews, Events, Comments, Likes, Follows and Profile on both the development and deployed version of the site
- All Nav links open in the correct page
- All external links open in a new browser
- Authentication works displaying a different set of options for logged in users compared to logged out
- Pages that are intended for logged in users only will redirect any users who are not logged in back to homepage
- Validation on forms works
- Not found pages display correctly when a non-existent url is searched or a Post, Review or Event that doesn't exist is searched

__User Stories__

![User Story Testing](docs/testing/gamer_verse_manual_testing.png)

![User Story Testing](docs/testing/gamer_verse_manual_testing_1.png)

### Browser and Device Testing

__Browsers__

- The website was tested on the following browsers: Google Chrome, Firefox, Microsoft Edge and Safari
- For each browser, functionality was tested including links and the responsive design

__Devices Tested__

The website was viewed on a variety of devices of all sizes including:
- Windows 11 Desktop (screen resolutions tested in 2560x1080 and 1920x1080)
- MacBook Pro (13-inch 2015 version)
- Moto G4
- Galaxy S5
- Pixel 2
- Pixel 2 XL
- iPhone 5/SE
- iPhone 6/7/8
- iPhone 6/7/8 Plus
- iPhone X
- iPad
- iPad Pro
- Surface Duo

The website is fully responsive and no issues found.

### W3C Validatior
The official W3C Markup Validator was used to validate both the HTML and CSS of the project to ensure there were no syntax errors within the site. 

__W3C CSS Markup Validatior__ - https://jigsaw.w3.org/css-validator/validator

All CSS code passed through the validator without any issues.

![CSS Validation](docs/testing/css_validated.png)

### ES Lint
The ESLint extension was downloaded on Gitpod and integrated throughout the entire project. Any errors that it picked up were corrected, however, most of these were minor and to do with spelling mistakes. Each page was meticulaiously scanned for probelms and fixed if any came up.

### Colour Contrast Checks

The website passed the colour contrast accessibility validator by A11y.

![Colour Contrast Checker](docs/testing/color-contrast-accessibilit-validator.png)

### Lighthouse Tool

The website has performed really well in the Lighthouse tool, in particular for Accessibility on all pages. Below is an example of the scores for the About page which is reflective for all pages:

![About](docs/testing/lighthouse.png)


## Solved Bugs
validation errors not showing for post create form. Updated model in drf api to make field required.

The submitted data was not a file. Check the encoding type on the form. fixed by changing formData.append('image', image) needed to be changed to formData.append('image', imageInput.current.files[0]);

game publisher and developer fields not clickable - fixed by change as to type in form field

image not displaying for reviews page - needed to modifiy reviews serializer to include image for field

Warning: Invalid DOM property `class`. Did you mean `className`? - didn't add className rather class for favourite navbar

## Known Bugs

## Technologies Used
### Languages Used
- HTML5
- CSS3
- JavaScript
- Python
- PostgreSQL

### Frameworks, Libraries and Programs
- Heroku - this was the platform used to deploy the application
- Django - used to build the backend database that serves the API for the frontend
- React-Bootstrap - CSS framework used to develop responsiveness and mobile-first approach
- Gitpod - this was my code editor for this project
- Git - was used for version control using the terminal through Gitpod to commit to Git and push to Github
- Github - is used to store the code for this project after being pushed from Git
- Techsini - was used to generate multi-device website mockups
- Fireshot - this was a Google Chrome extension used to take screenshots
- Google Fonts - used to import fonts to website
- Font Awesome - library of icons used for social media and services we offer
- Balsamiq - was used to create the wireframes during the design process.
- GoogleDev Tools - was used to help investigate issues with code and visually see what code was related to which area on the page
- ColorSpace - used to generate colour pallets for use on website
- a11y - used to check website colour contrast and accessibility
- Raw Pixel - used to find royalty-free images
- Favicon.io - generated the websites favicon
 
### Databases
- SQLite: local database used to test during development
- PostgreSQL: database used in Heroku to store data on deployment

## Deployment
### Deploying to Heroku

### Forking Repository
You can fork the GitHub repository to make a copy of the original to view and change without affecting the original. This can be done by:

1. Log into GitHub or create an account
2. Locate the repository at https://github.com/Jbachtiger/ci-pp5-gamer-verse
3. At the top of the repository, on the right-hand side of the page you will see an option to select "Fork" from the available buttons
4.  Click the fork button and a copy of the repository will have been created

### Cloning Repository
You can create a clone of your repository by:

1. Locate the repository you wish to clone https://github.com/Jbachtiger/ci-pp5-gamer-verse
2. Click the arrow on the 'Code' button at the top of the list of files
3. Select the clone by https and copy the URL using the provided clipboard
4. Navigate to your chosen code editor and within the terminal change the directory to the location your to clone the repository to
5. Type 'git clone' and paste the https link you copied from GitHub
6. Press enter and git will clone the repository to your local machine

## Credits
### Code

### Content 
god of war - https://www.radiotimes.com/technology/gaming/god-of-war-ragnarok-release-date/
skyrim - https://www.eurogamer.net/the-elder-scrolls-5-skyrim-review
everdale - https://boardgamegeek.com/image/3918905/everdell
zelda - eurogamer
boardgame art - https://islaythedragon.com/featured/a-top-10-board-game-art-id-like-to-frame/

### Media
https://logo.com/
https://favicon.io/favicon-converter/
https://www.freepik.com/free-vector/404-error-concept-with-blue-robot_1535153.htm#page=4&query=404%20not%20found&position=38&from_view=keyword

<a href="https://www.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_8030430.htm#query=404&position=3&from_view=search">Image by storyset</a> on Freepik

### Resources

### Acknowledgements
- My partner for her patience and continuing support
- Code institute Slack Community and Tutor Support