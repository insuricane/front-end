import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home';
import Forecast from './forecast/Forecast';
import About from './about/About';
import Header from './header/Header';
import Footer from './footer/Footer';
import Accept from './accept/Accept';

const Root = () => (
  <div>
    <Header />

    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/forecast" component={Forecast} />
        <Route path="/about" component={About} />
        <Route path="/accept" component={Accept} />
      </div>
    </Router>

    <Footer />
  </div>
);

export default Root;
