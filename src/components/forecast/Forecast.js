import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';

import MyMap from './MyMap';
import ForecastInfo from './ForecastInfo';
import Container from '../shared/Container';

const Forecast = ({ location }) => {
  if (!(location && location.lat && location.lng)) {
    return (<Redirect to="/" />);
  }

  return (
    <Container>
      <ForecastInfo />

      <MyMap />

      <Link to="/accept" className="btn btn-light">
        Continue &rarr;
      </Link>
    </Container>
  );
};

const mapStateToProps = ({ userState }) => ({
  location: userState.location,
});

Forecast.propTypes = {
  location: PropTypes.shape({
    lng: PropTypes.number,
    lat: PropTypes.number,
  }).isRequired,
};

// Redux config
export default connect(
  mapStateToProps,
)(Forecast);
