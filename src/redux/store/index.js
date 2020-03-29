import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import reducers from "../reducers/index";
import setupSocket from "../../Socket/index";

const sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
);
// const store = createStore(reducers, applyMiddleware(...middleware));
const state = store.getState();

let username = state.login.presentUser;
console.log("username in store", username);
const socket = setupSocket(store.dispatch, username);
sagaMiddleware.run(rootSaga, { socket, username });

//sagaMiddleware.run(rootSaga);
export default store;
