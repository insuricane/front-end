import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home';
import Forecast from './forecast/Forecast';
import About from './about/About';
import Header from './header/Header';
import Footer from './footer/Footer';

const Topics = () => (
  <div>
    <h2>Topics</h2>
  </div>
);

const Root = () => (
  <div>
    <Header />
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/forecast" component={Forecast} />
        <Route path="/topics" component={Topics} />
        <Route path="/about" component={About} />
      </div>
    </Router>
    <Footer />
  </div>
);

export default Root;
