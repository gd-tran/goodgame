/* eslint-disable react/jsx-filename-extension */
/**
  * @desc Renders our main app, Handles routes in app
*/

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/login/Login.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import Update from './components/Update.jsx';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/games">
          <Update />
        </Route>
        
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}
