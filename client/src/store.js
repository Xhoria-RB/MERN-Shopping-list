import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; //Since the rootReducer is in a index.js isn't needed to be added here /reducers/index.js

//Represents our inital state
const initialState = {};

//Any middleware to use will be placed inside an array
const middleware = [thunk];

/**
 * Creates the store >> createStore(reducer, state, middleware)
 * Since we're using thunk as a middleware we need to compose it and use redux devtools to apply that middleware
 * ...middleware will bring the content of middleware[]
 * window.__REDUX_DEVTOOLS_EXTENSION__ is from the redux devtools extension
 */
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);
// const store = createStore(
//   rootReducer,
//   initialState,
//   compose(
//     applyMiddleware(...middleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

export default store;
//In my store.js I changed the createstore to:

// const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
// const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));
