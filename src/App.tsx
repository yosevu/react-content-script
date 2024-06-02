import logo from './logo.svg';
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
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
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function App() {
  const [status, setStatus] = useState('summary');
  return (
  <Tabs
      defaultActiveKey="summary"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="summary" title="Summary">
        <Summary status={'summary'}/>
      </Tab>
      <Tab eventKey="discussion" title="Discussion">
      <Discussion status={'discussion'}/>
      </Tab>
    </Tabs>
  );
}

export default App;
