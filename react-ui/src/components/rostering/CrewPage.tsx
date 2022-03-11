import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Reducers } from "src/state/reducers";
import { ADD_CREW, DEL_CREW } from "src/state/actions/actionTypes";
import Button from '@material-ui/core/Button';

function CrewPage() {

  const [input, setInput] = useState('-');

  const dispatch = useDispatch();

  const state = useSelector( (reducers: Reducers) => reducers.crewReducer );
  
  return (
    <form onSubmit={() => {}}>
      <h2>State: {state.crewes}</h2>
      <h3>Input</h3>

      <Button onClick={ (()=> dispatch( { type: DEL_CREW, crew: input} )) } > Del </Button>
      <input
        type="text"
        onChange={(e) => { 
          setInput(e.target.value);
        }}
        value={input}
      />
      <Button onClick={ (()=> dispatch( { type: ADD_CREW, crew: input} )) } > Add </Button>
    </form>
  );
}

export default CrewPage;
