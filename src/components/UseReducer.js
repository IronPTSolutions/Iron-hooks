import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { lastOperation: 'Increment', count: state.count + 1}
    case 'decrement':
      return { lastOperation: 'Decrement', count: state.count - 1}
    case 'reset':
      return { lastOperation: 'Reset', count: 0}
    default:
      throw new Error();
  }
}

const initialState = {
  count: 0,
  lastOperation: 'None'
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>UseReducer Hook</h1>
      <div>
        <h3>Count: {state.count}</h3>
        <h4>Last operation: {state.lastOperation}</h4>
        <button className="btn btn-primary mr-2" type="button" onClick={() => dispatch({ type: 'increment' })}>
          Increase
        </button>
        <button className="btn btn-secondary mr-2" type="button" onClick={() => dispatch({ type: 'decrement' })}>
          Decrease
        </button>
        <button className="btn btn-danger" type="button" onClick={() => dispatch({ type: 'reset' })}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default UseReducer;