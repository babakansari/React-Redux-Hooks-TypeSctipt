import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import ApplicationState from "./ApplicationState";
import thunk from 'redux-thunk';

export default function configureStore(initialState?: ApplicationState) {
  // const composeEnhancers =
  //   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

  return createStore(
    rootReducer,
    {},
    compose(applyMiddleware(reduxImmutableStateInvariant(), thunk))
  );
}
