import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Reducers } from "src/state/reducers";
import { ADD_CREW, DEL_CREW } from "src/state/actions/actionTypes";
import Button from '@material-ui/core/Button';
import { Crew } from "src/state/ApplicationState";

function CrewPage() {

  const [input, setInput] = useState<Crew>({
    Id: 0,
    Name: 'Item-0',
    Rank:0
  });

  const dispatch = useDispatch();

  const state = useSelector( (reducers: Reducers) => reducers.crewReducer );
  
  return (
    <form onSubmit={() => {}}>
      <h2>State: 
      
      {state.crewes.map(crew => {
              return (  
                
                  <p  key={crew.Name}>
                    {crew.Name}
                  </p>
              );
            })}

      </h2>
      <h3>Input</h3>

      <Button onClick={ (()=> dispatch( { type: DEL_CREW, crew: input} )) } > Del </Button>
      <input
        type="text"
        onChange={(e) => { 
          setInput({
            Id: 1,
            Name: e.target.value,
            Rank: 1
          });
        }}
        value={input.Name}
      />
      <Button onClick={ (()=> dispatch( { type: ADD_CREW, crew: input} )) } > Add </Button>
    </form>
  );
}

export default CrewPage;
