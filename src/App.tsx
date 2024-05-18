import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Summary from './Summary';
import Discussion from './Discussion';
import { useState } from 'react';

function App() {
  const [status, setStatus] = useState('summary');
  return (
    <Router>
    <div>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/discussion">
          <Discussion status={'discussion'}/>
        </Route>
        <Route path="/">
          <Summary status={'summary'}/>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
