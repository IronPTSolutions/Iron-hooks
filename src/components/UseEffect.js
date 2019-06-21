import React, { useState, useEffect } from 'react';

const UseEffect = () => {
  const [title, setTitle] = useState('Iron Hooks');

  useEffect(() => {
    document.title = title;
  }, [title])

  return (
    <div>
      <h1>UseEffect Hook</h1>
      <div>
        <h3>Title of the page: {title}</h3>
        <h5>Introduce the title you want to see:</h5>
        <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} />
      </div>
    </div>
  );
};

export default UseEffect;