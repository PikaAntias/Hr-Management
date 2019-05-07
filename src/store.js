import rootReducer from './reducer'
import { createStore, applyMiddleware, compose } from 'redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
// import { reactReduxFirebase } from 'react-redux-firebase'
import firebase from 'firebase/app'
import  'firebase/auth'
import  'firebase/database'

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCIZxOr2tb49XhntU9th_VVMUxDFNHYebg",
    authDomain: "totalhr-8df22.firebaseapp.com",
    databaseURL: "https://totalhr-8df22.firebaseio.com",
    projectId: "totalhr-8df22",
    storageBucket: "totalhr-8df22.appspot.com",
    messagingSenderId: "364685514463"
};
export const fire = firebase.initializeApp(firebaseConfig)

// react-redux-firebase options
const config = {
  userProfile: 'users', // firebase root where user profiles are stored
  // autoPopulateProfile: false
  // enableLogging: false, // enable/disable Firebase's database logging
}

const middlewares = [];
if(process.env.NODE_ENV === "development") {
  const {logger} = require("redux-logger")
  middlewares.push(logger)
}

// console.log(reactReduxFirebase)

// Add redux Firebase to compose
// const createStoreWithFirebase = compose(
//   reactReduxFirebase(firebase, config)
//   // applyMiddleware(...middlewares)
// )(createStore)

// Create store with reducers and initial state
const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const rrfProps = {
   firebase,
   config,
   dispatch: store.dispatch
 }

export default store;
