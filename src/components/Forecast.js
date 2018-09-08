import React from 'react';
import GoogleMapReact from 'google-map-react';
import { IconContext } from 'react-icons';
import { GoHome } from 'react-icons/go';

const center = {
  textAlign: 'center',
};

const HouseComponent = () => (
  <IconContext.Provider value={{ size: 28 }}>
    <div>
      <GoHome />
    </div>
  </IconContext.Provider>
);

const Forecast = () => (
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
        <div className="forecast">
          <div style={center}>
            <h1>Insuricane</h1>
            <p>An emergency short-term home insurance product for hurricanes</p>
          </div>
          <div style={{ height: '50vh', width: '100%' }}>
            <GoogleMapReact
              defaultCenter={{ lat: 40.7446790, lng: -73.9485420 }}
              defaultZoom={11}
            >
              <HouseComponent
                lat={40.7473310}
                lng={-73.8517440}
              />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Forecast;
