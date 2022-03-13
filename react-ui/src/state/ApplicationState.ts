export type Crew = { 
    Id: number,
    Name: string,
    Rank: number
}

type ApplicationState = {
    crewes: Array<Crew>
}

export default ApplicationState;