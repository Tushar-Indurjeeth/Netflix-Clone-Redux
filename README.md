# Netflix Redux Clone
A Netflix clone built using [React](https://reactjs.org/), [Redux](https://redux.js.org/) and [Stripe Payments](https://stripe.com/).

## Live demo
[https://netflix-clone-redux-c96b9.web.app/](https://netflix-clone-redux-c96b9.web.app/)

## How it works
- The movie data is retrieved using the TMDB API.
- You can sign up and create an account, authentication is done through [Firebase](https://firebase.google.com/)
- After signing in, click on the avatar icon on the top right corner, from there you select a payment plan(NOT REAL, ONLY FOR TEST PURPOSES)
- Click subscribe on a plan
- You will be redirected to the checkout page
- Enter the card number: 4242 4242 4242 4242 and fill out the rest of the details with dummy data
- After all details are entered click "Subcribe" and wait for the payment to finish
- After the payment is done, you will see if you click on the avatar icon on the top right corner, it will indicate the plan you have chosen

## APIs used 
- [Stripe](https://stripe.com/)
- [TMDB](https://www.themoviedb.org/)

## Built using
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Stripe](https://stripe.com/)
- [Firebase](https://firebase.google.com/)
- [Run Subscription Payments with Stripe - Firebase extension](https://firebase.google.com/products/extensions/firestore-stripe-subscriptions)
- [React Router](https://reactrouter.com/)
- [Axios](https://github.com/axios/axios)

## Platform
- [Firebase](https://firebase.google.com/)

## License
Code released under the [MIT License](https://github.com/Tushar-Indurjeeth/Netflix-Clone-Redux/blob/master/LICENSE).
