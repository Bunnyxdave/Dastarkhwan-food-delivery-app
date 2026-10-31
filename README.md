# Dastarkhwan

Dastarkhwan is a restaurant-discovery and food-ordering demo built with React and Vite. Browse restaurants around Hyderabad, search by restaurant name or cuisine, and try the sample cart and account forms.

## Features

- Restaurant listings fetched from the Swiggy restaurant-list API through a CORS proxy
- Restaurant search by name or cuisine
- Responsive restaurant cards with available images, ratings, cuisines, and delivery details
- Demo cart with quantity controls, item removal, delivery estimate, and order confirmation
- About, Contact, and Login pages connected with React Router
- Login and sign-up forms for demonstration only; they do not create or authenticate accounts

## Getting started

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite to view the app.

## Available scripts

```bash
npm run dev       # Start the development server
npm run build     # Create a production build in dist/
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

## Pages

| Route | Page |
| --- | --- |
| `/` | Restaurant listings and search |
| `/about` | About Dastarkhwan |
| `/contact` | Contact details |
| `/cart` | Demo restaurant cart |
| `/login` | Demo sign-in and sign-up forms |

## Restaurant data

The home and cart pages request restaurant listings for Hyderabad using the Swiggy API via the URL configured in `src/assets/restaurantData.js`. The API/proxy may reject requests or change its response; in that case, the pages show a loading error rather than fabricated listings.

The cart is a front-end demonstration. Its restaurant prices are estimates derived from the API's “cost for two” field; they are not menu prices. Placing an order does not submit payment or contact a restaurant. Cart state is held in React memory and resets when the app is reloaded.

## Project structure

```text
src/
  assets/
    logo.png
    restaurantData.js
    Urls.jsx
  About.jsx
  App.jsx
  Body.jsx
  Cart.jsx
  Contact.jsx
  Footer.jsx
  Header.jsx
  Login.jsx
  Product_Card.jsx
  index.css
  main.jsx
```
