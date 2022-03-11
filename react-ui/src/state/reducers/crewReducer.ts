import * as types from '../actions/actionTypes';
import ApplicationState from '../ApplicationState'

const initialState: ApplicationState = {
  crewes: []
};

const crewReducer = (state: ApplicationState = initialState, action: types.CrewAction) => {
  switch (action.type) {
    case types.ADD_CREW:
      const newCrews = [ ...state.crewes];
      newCrews.push(action.crew)
      const newState: ApplicationState = { 
        crewes: newCrews
      };
      return newState;
    
    case types.DEL_CREW:
      var index = state.crewes.indexOf(action.crew);
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