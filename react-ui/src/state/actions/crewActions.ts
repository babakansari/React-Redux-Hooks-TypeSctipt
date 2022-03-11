import * as types from './actionTypes';
import { Dispatch } from 'redux';

// export function createCrew(crew: string) {
//   return { type: types.ADD_CREW, crew };
// }

export const createCrew = (crew: string) => {
  return (dispatch: Dispatch<types.CrewAction>) => {
    dispatch({
      type: types.ADD_CREW,
      crew: crew
    });
  }
}

export const deleteCrew = (crew: string) => {
  return (dispatch: Dispatch<types.CrewAction>) => {
    dispatch({
      type: types.DEL_CREW,
      crew: crew
    });
  }
}