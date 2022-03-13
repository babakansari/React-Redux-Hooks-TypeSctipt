import { Crew } from "../ApplicationState";

export const ADD_CREW = "ADD_CREW";
export const DEL_CREW = "DEL_CREW";
export const LOAD_CREW = "LOAD_CREW";

export type CrewAction = {
    type: string,
    crew: Crew
  }

export type CrewesAction = {
  type: string,
  crewes: Array<Crew>
}