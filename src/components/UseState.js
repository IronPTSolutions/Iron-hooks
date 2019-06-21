import React, { useState } from 'react';

const UseState = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>UseState Hook</h1>
      <div>
        <h3>Count: {count}</h3>
        <button className="btn btn-primary mr-2" type="button" onClick={() => setCount(count + 1)}>
          Increase
        </button>
        <button className="btn btn-secondary mr-2" type="button" onClick={() => setCount(count - 1)}>
          Decrease
        </button>
        <button className="btn btn-danger" type="button" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default UseState;