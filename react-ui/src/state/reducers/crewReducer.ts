import * as types from '../actions/actionTypes';
import ApplicationState from '../ApplicationState'

const initialState: ApplicationState = {
  crewes: []
};

const crewReducer = (state: ApplicationState = initialState, action: types.CrewAction) => {
  const crew = state.crewes.find( crew => crew.Name === action.crew.Name);
  switch (action.type) {
    case types.ADD_CREW:
      if (crew === undefined) {
        const newCrews = [ ...state.crewes];
        newCrews.push(action.crew)
        const newState: ApplicationState = { 
          crewes: newCrews
        };
        return newState;
      }
      return state;
    
    case types.DEL_CREW:
      
      if (crew !== undefined) {
        
        const newCrews = [ ...state.crewes];
        const removeIndex = newCrews.findIndex( crew => crew.Name === action.crew.Name);
        // console.log(JSON.stringify(newCrews));
        if(removeIndex !== -1){
          newCrews.splice( removeIndex, 1 );
          const newState: ApplicationState = { 
            crewes: newCrews
          };
          return newState;
        }
      }
      return state;

    default:
      return state;
  }
}

export default crewReducer;