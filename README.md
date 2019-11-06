[![Heroku](https://heroku-badge.herokuapp.com/?app=rolan-cars-portfolio)](https://rolan-cars-portfolio.herokuapp.com)

## ts-cars-portfolio
Full stack application representing cars portfolio. Home page displays available cars and provides an ability to sort the data. Details page gives an extended offer overview information.

## Backend

N-Layered server architecture on top of [NodeJS](https://nodejs.org/en/) and [Express](https://expressjs.com/) framework. Server logic is implemented with [Typescript](https://www.typescriptlang.org/) language using [RxJS](https://rxjs-dev.firebaseapp.com/) reactive flows.

## Frontend

UI logic is implemented with [Typescript](https://www.typescriptlang.org/) language using [React](https://reactjs.org/) web framework and [Material-UI](https://material-ui.com/) components.

## Initial project setup

Global libraries and node modules
```
npm install copyfiles create-react-app -g
npm install && npm install --prefix src/cars-portfolio-client
```

## Build and run instructions

Production mode
```
npm run prod
```

Local mode
```
# server
npm run local
# client
npm run start --prefix src/cars-portfolio-client
```
