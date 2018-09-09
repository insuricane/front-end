import React from 'react';
import MyMap from './MyMap';
import Container from '../shared/Container';

const Forecast = () => (
  <Container>
    <div className="forecast">
      <MyMap />
    </div>
  </Container>
);

export default Forecast;
