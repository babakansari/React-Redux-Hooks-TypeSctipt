import React from 'react';

interface State {
    count: number
}
const initialState:State = {
    count: 0
}

type Actions = 'reset' | 'increment' | 'decrement'
interface Action {
    type: Actions
}

const reducer = (state: State, action: Action) : State => {
    switch (action.type){
        case 'increment':
            return {count: state.count+1};
        case 'decrement':
            return {count: state.count-1};
        case 'reset':
            return initialState;
        default:
            return state;
    }
};



const Counter = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <div>
            <p>Clicked Count = {state.count} </p>
            <button onClick={() => dispatch({ type: 'increment'})}>+</button>
            <button onClick={() => dispatch({ type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({ type: 'reset'})}>Reset</button>
        </div>
    );
}

export default Counter;