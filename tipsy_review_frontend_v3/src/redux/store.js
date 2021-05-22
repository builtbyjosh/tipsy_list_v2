import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import breweryReducer from "./reducers/breweryReducer";
import thunk from "redux-thunk";
import reviewReducer from "./reducers/reviewReducer";

const rootReducer = combineReducers({
  breweries: breweryReducer

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
