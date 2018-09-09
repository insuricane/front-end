import React from 'react';
import MyMap from './MyMap';

const center = {
  textAlign: 'center',
};

const Forecast = () => (
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
        <div className="forecast">
          <div style={center}>
            <h1>Insuricane</h1>
            <p>An emergency short-term home insurance product for hurricanes</p>
          </div>
          <MyMap />
        </div>
      </div>
    </div>
  </div>
);

export default Forecast;
