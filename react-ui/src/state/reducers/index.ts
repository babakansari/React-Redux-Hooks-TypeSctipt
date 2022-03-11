import { combineReducers } from "redux";
import crewReducer from "./crewReducer";

const rootReducer = combineReducers({
  crewReducer
});

export default rootReducer;

export type Reducers = ReturnType<typeof rootReducer>;