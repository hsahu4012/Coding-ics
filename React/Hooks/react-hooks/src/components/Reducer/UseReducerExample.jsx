import React, { useState, useReducer } from 'react'

const UseReducerExample = () => {
    // const [count, setCount] = useState(0);

    const initialState = { count: 0 };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'increase': return { count: state.count + 1 };
            case 'decrease': return { count: state.count - 1 };
            case 'input': return { count: action.payload };
        }
        return { count: state.count + 1 };
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: 'increase' })}>Increase</button>
            <button onClick={() => dispatch({ type: 'decrease' })}>Decrease</button>
            <br />
            <input value={state.count} onChange={(e) => dispatch({ type: 'input', payload: Number(e.target.value) })} type="number" />
        </div>
    )
}

export default UseReducerExample

// It provides state and Dispatch function

// 2 Arguments
// 1. Reducer Function
// 2. Initial state
// returns current state and dispatch method
// 
