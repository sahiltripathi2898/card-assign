import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './component/home';
import add from './component/add';

function App() {
  return (
    <Router>
      <Route component={Home} exact path="/" />
      <Route component={add} exact path="/add" />
    </Router>
  );
}

export default App;
