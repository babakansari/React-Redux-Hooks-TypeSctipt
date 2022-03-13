import * as types from './actionTypes';
import { Dispatch } from 'redux';
import axios from 'axios';
import { Crew } from '../ApplicationState';


export const createCrew = (crew: Crew) => {
  return (dispatch: Dispatch<types.CrewAction>) => {
    dispatch({
      type: types.ADD_CREW,
      crew: crew
    });
  }
}

export const deleteCrew = (crew: Crew) => {
  return (dispatch: Dispatch<types.CrewAction>) => {
    dispatch({
      type: types.DEL_CREW,
      crew: crew
    });
  }
}

export const loadCrewes = () => {

  return async (dispatch: Dispatch<types.CrewesAction>) => {

    // const request = await axios
    //                         .get("")
    //                         .catch( (err) => console.error(err) );

    // dispatch({
    //   type: types.LOAD_CREW,
    //   crewes: crewes
    // });
  }
}