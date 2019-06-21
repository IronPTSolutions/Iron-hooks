import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';

const UseContext = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>UseContext Hook</h1>
      <div className="text-center">
        <img src="https://png.pngtree.com/svg/20161031/f74cf5078b.svg" alt="user" width="200" />
        <h2>{user}</h2>
      </div>
    </div>
  );
};

export default UseContext;