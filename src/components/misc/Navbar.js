import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';

const routes = [
  {
    text: 'UseState',
    route: ''
  },
  {
    text: 'UseEffect',
    route: 'use-effect'
  },
  {
    text: 'UseContext',
    route: 'use-context'
  },
  {
    text: 'FetchData',
    route: 'fetch-data'
  },
]

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <span className="font-weight-bold">Iron Hooks</span>
        <div className="collapse navbar-collapse d-flex justify-content-between">
          <ul className="navbar-nav pl-3">
            {routes.map(({ route, text }, index) => (
              <li className="nav-item" key={index}>
                <NavLink exact className="nav-link" to={route}>
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
