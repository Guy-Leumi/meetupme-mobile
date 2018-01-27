import {createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
//import {createLogger} from 'redux-logger';
import reducers from './reducers';


/* const middlewares = [
    promiseMiddleware()
]; */

let composeEnhancers = compose;

if(__DEV__){
    
/*     const creatLogger = require('redux-logger');

    middlewares.push(createLogger()); */
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

//const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default createStore(
   reducers,
   //enhancers(applyMiddleware(...middlewares))
   composeEnhancers()
);