import * as types from '../actions/actionTypes';
import ApplicationState from '../ApplicationState'

const initialState: ApplicationState = {
  crewes: []
};

const crewReducer = (state: ApplicationState = initialState, action: types.CrewAction) => {
  const index = state.crewes.indexOf(action.crew);
  switch (action.type) {
    case types.ADD_CREW:
      if (index === -1) {
        const newCrews = [ ...state.crewes];
        newCrews.push(action.crew)
        const newState: ApplicationState = { 
          crewes: newCrews
        };
        return newState;
      }
      return state;
    
    case types.DEL_CREW:
      if (index !== -1) {
        const newCrews = [ ...state.crewes];
        newCrews.splice(index, 1);
        const newState: ApplicationState = { 
          crewes: newCrews
        };
        return newState;
      }
      return state;

    default:
      return state;
  }
}

export default crewReducer;