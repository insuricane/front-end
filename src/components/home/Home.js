import React from 'react';
import Form from './Form';

const center = {
  textAlign: 'center',
};

const Home = () => (
  <div className="home">
    <div style={center}>
      <h1>Insuricane</h1>
      <p>An emergency short-term home insurance product for hurricanes</p>
    </div>

    <Form />
  </div>
);

export default Home;
