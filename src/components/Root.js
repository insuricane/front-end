import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home';
import Forecast from './Forecast';

const Topics = () => (
  <div>
    <h2>Topics</h2>
  </div>
);

const Root = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/forecast" component={Forecast} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

export default Root;
