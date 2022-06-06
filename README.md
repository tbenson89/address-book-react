![My Address Book HDR](https://media.discordapp.net/attachments/703574209904771162/983391322591342601/unknown.png)


# Project Purpose & Objectives

    The purpose of the project is to demonstrate the ability to create a simple Address book using React application using Typescript HTML and CSS.


## Requirements 

The project is to develop a SPA - Address/Contact Book, using GIT nad Github as Version Control. Typescript for JS that scales. 

I've have been using TFS/Azure environments a lot so it took me a couple commits to *git* back in the groove. There is no backend. but if we have time we will add a cache and empty cache feature to save some of the data. 


 ### Feature Requirements: 

- Ability to Add, Edit, and delete contacts
- Contacts should have a these properties
    - Name
    - Address
    - Email
    - Phone
    - Notes
- Ability to view all contacts in a list sorted alphebetically by name or email
- Ability to search for a contact by name, email or phone number


## Build and Run

Download the repo at [`git@github.com:tbenson89/address-book-react.git`](`git@github.com:tbenson89/address-book-react.git`)

run `npm install` && `npm start`

Navigate to [`http://localhost:3000`](http://localhost:3000)

-----

## Design N Layout #1

![dev001 Image 1](https://media.discordapp.net/attachments/703574209904771162/983173210403143701/unknown.png?width=950&height=676)

### Layout #1 Tablet

![dev001 Image 2 Tablet](https://media.discordapp.net/attachments/703574209904771162/983484708585341009/address-book-react-v3-tablet.png?width=298&height=676)

### Layout #1 Mobile

![dev001 Image 3 Mobile](https://media.discordapp.net/attachments/703574209904771162/983485599623295006/address-book-react-v3-mbl.png?width=156&height=676)


## Todo's 

- Write up message to Dee about assignment completion!
- Social links
- Fix Layout and Responsive Design for Chrome
- Pull down the MASTER branch for Stage Build and Deploy
- Build ENV for Production Deploy
- Either host project: 
    - git pages
    - https://vercel.com/ free tier.
    - ~~on our server https://slmodd.com~~
- Figure out where / what to do with the filter email btn!
- Add more Error handler and user prompts!
- add jDOCS above FN's 
- redesign clean up - I'd like the add contact form either in the left column or as a modal
- ~~Responsive Design!~~ === **DONE**
- ~~Style the Edit / Delete buttons~~ === **DONE**

## Bugs: 
- BUG: Layout and sizing DOES NOT look good on chrome. Update and fix!
- BUG: found a bug - when editing the first contact to put the email to Z and save then click "filter by email" 
    - it does not filter the first edited contact in the list ? == weird I will go back over the sort N filter logic later for now I think it will work. 

----------


## roughROUGH Quick Layout Mockups

![mock image 1](https://media.discordapp.net/attachments/703574209904771162/982770344387567706/20220604_161743.jpg?width=1059&height=676) 
![mock image 2](https://cdn.discordapp.com/attachments/703574209904771162/982770344676966430/20220604_161802.jpg) 


---------

## Production Notes


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Deployment

If we have time we will deploy the application setting up our cPanel to work with Node projects or put it in an AWS instance. I also haven't tried vercel. So i do plan on trying that free tier out. There's also storj! 


