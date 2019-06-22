import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './misc/Navbar';
import UseState from './UseState';
import UseReducer from './UseReducer';
import UseEffect from './UseEffect';
import UseContext from './UseContext';
import FetchData from './FetchData';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container pt-5">
        <Switch>
          <Route path="/use-context" component={UseContext} />
          <Route path="/use-effect" component={UseEffect} />
          <Route path="/use-reducer" component={UseReducer} />
          <Route path="/fetch-data" component={FetchData} />
          <Route component={UseState} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
