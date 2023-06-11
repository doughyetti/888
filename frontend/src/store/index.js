import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import menusReducer from "./menu";
import reviewsReducer from "./review";
import cartSlice from "./cart";
import cartUiSlice from "./cartUiSlice";

const rootReducer = combineReducers({
  session: sessionReducer,
  menu: menusReducer,
  review: reviewsReducer,
  cart: cartSlice.reducer,
  cartUi: cartUiSlice.reducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
