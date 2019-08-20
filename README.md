# It Is Always Soup

## Introduction
The final team project for Makers Academy. A team of 3 were given just 8 days to go from a vague brief to a full production application.

**Our brief** - an eco themed application. <br>
**Our solution** - a tool to help a user find recipes from their kitchen contents.<br>
**Our goal** - to make sure it is **not** always soup.

You can experience the app for yourself here - [It Is Always Soup](https://it-is-always-soup.firebaseapp.com)


A video of our final presentation can be seen [here](https://youtu.be/ijyHTx_QyWU)

------------------
## Technology

We used the following technologies:<br>
* **Progressive Web App** - satisfies all criteria to be a classed as a PWA<br>
* **React** - project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). <br>
* **CI/CD** - Travis integrated with Firebase<br>
* **Testing** - unit tests in [Jest](https://jestjs.io/)/[Enzyme](https://airbnb.io/enzyme/) and feature tests in [Puppeteer](https://github.com/GoogleChrome/puppeteer)
* **API Proxy** - a lightweight Sinatra Ruby server was also incorporated into the product that proxies our API requests.

-----------------------
## Learnings
During the project we kept a daily diary of learnings. These can be viewed in the [repo wiki](https://github.com/ajosephides/i.i.a.s/wiki)

## Next Steps
* Tech Debt
  * Splitting up API calls. At the moment we are on a free tier and currently burn through our api calls in 10 searches. This is because recipes, indredients and instruction are all performed on page load. Although this is great for useability (makes it quick for a user) it would be good to see what performance drop their might be if the ingredients and instructions search is done only when a card is clicked.
  * Refactor the `on-click` method - there is a lot going on as a result of this click and it should be refactored to split this function up further.
* Future features:
  * Originally we wanted to introduce ML vision as an input instead of just typing an ingredient.
  * Introducing a richer offline offering for a user. Currently the app simply searches an api but we would like a richer user experience for a user - e.g. save a recipe.
* Security:
  * currently the app is purely a client side React app which means all api call and keys are in the browser. To further extend our application we *need* to introduce a different way to handle our API queries.

---------------------------------

## Forking and Running Locally
* fork and clone repo
* run `npm install`

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`
Launches the test runner and shows the test coverage.

### `npm run build`
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
