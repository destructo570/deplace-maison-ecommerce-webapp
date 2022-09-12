# Deplace Maison Ecommerce Webapp NextJs and ReactJS

A clone of deplace maison ecoomerce website using React/Next JS with stripe payment integration and firebase for storing orders.

## [Live Demo](https://deplace-maison-ecommerce-webapp-951b22zlw-destructo570.vercel.app/)

## Disclaimer

This project was made only for educational purposes, I do not own any of the content (product images, fonts etc.). All the credit goes to Deplace maison. This project was only meant to be created as part of frontend React/NextJs practice and learning. This project is not meant to be used for any other purposes.

I found out about the website on [FrontendPractice](https://www.frontendpractice.com/)
You can checkout the original website [here.](https://www.deplacemaison.com/)

## Screenshots

## Features & Tech Stack

- NextJs/ReactJS - Frontend and UI development
- NodeJS - Backend development
- Axios - Making asynchronus HTTP requests
- NextAuth v4 - For user authentication via gmail
- Stripe payment integration (webhooks)
- StyledComponents - Styling all the react components.
- Firebase Realtime DB - Getting products and other data.
- Firebase Firestore DB - Storing  orders after processing payments.
- ContextApi for app wide state management
- Local storage for storing user cart


## Installation

- Download the code
- Open a npm terminal in root directory

```bash
npm install
```

## Environment variable file
- In the root folder create a .env.local file and define these constants in there
- You can checkout the respective docs of stripe, google, firebase etc. on how to get the public and private keys.
- Stripe: https://stripe.com/docs/keys
- Stripe CLI: https://stripe.com/docs/stripe-cli
- Firebase Service Account: https://firebase.google.com/docs/admin/setup#set-up-project-and-service-account
- Google cloud auth: https://support.google.com/cloud/answer/6158849?hl=en
- Next Auth Secret: https://next-auth.js.org/configuration/options#secret

```
#Stripe
STRIPE_PUBLIC_KEY= 
STRIPE_SECRET_KEY= 

#Stripe Terminal/CLI
STRIPE_SIGNING_SECRET= 

HOST=http://localhost:3000

#Database
FIREBASE_SERVICE_ACC_KEY= 

#Authentication
GOOGLE_CLIENT_ID= 
GOOGLE_CLIENT_SECRET= 

//A random string used to hash tokens by NextAuth
SECRET= 
```

## Building the project
- Run the below command to start the development server

```bash
npm run dev
# or
yarn dev
```
- Open http://localhost:3000/ in your local machine to see the website live

## Building for production
- Run the below command to build the project for production

```bash
npm run build
```

## Todo
 - Add animations
 - Add dark theme
 - Add page transitions
