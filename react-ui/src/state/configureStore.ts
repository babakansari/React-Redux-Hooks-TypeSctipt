import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import ApplicationState from "./ApplicationState";
import thunk from 'redux-thunk';

export default function configureStore(initialState?: ApplicationState) {
  return createStore(
    rootReducer,
    {},
    compose(applyMiddleware(reduxImmutableStateInvariant(), thunk))
  );
}
