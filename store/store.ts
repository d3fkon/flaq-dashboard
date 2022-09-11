import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const initalState = {};

// middleware
const middleware = [thunk];
let composeEnhancers = compose;
if (typeof window !== 'undefined') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}


export const store = createStore(
  rootReducer,
  initalState,
  composeEnhancers(applyMiddleware(...middleware)))

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
