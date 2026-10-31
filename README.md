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

## Important cautions

- **Front-end demo only:** This project is a client-side React application. It has no backend, database, or production ordering infrastructure.
- **No real authentication:** Login and sign-up only validate form fields in the browser and display a demo message. They do not create accounts, verify identities, or securely authenticate users. Do not enter real passwords or sensitive information.
- **No real orders or payments:** Cart actions and order confirmation are simulated. No order is sent to a restaurant, and no payment is processed.
- **Estimated prices:** Cart prices are estimates derived from the restaurant API's “cost for two” field, not real menu item prices or a guaranteed quote. The delivery fee is a demo value.
- **Temporary cart state:** Cart contents live only in React memory and reset on reload; they are not saved to an account or browser storage.
- **External API and images:** Restaurant data and images depend on Swiggy and third-party hosting. Requests can fail, be blocked by the proxy, return changed data, or be unavailable. An error message does not necessarily indicate an issue with the app itself.
- **Demo contact information:** Contact details displayed in the app are sample content and may not correspond to a real business.
- **Not production-ready:** Do not use this app to make real purchases or submit personal, payment, or account credentials.

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
