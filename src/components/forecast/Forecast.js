import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';

import MyMap from './MyMap';
import Container from '../shared/Container';

const Forecast = ({ location, assetsValue }) => {
  if (!(location && location.lat && location.lng)) {
    return (<Redirect to="/" />);
  }

  return (
    <Container>
      <p>
        Policy value:
        {assetsValue}
      </p>

      <p>Probability of destruction: TODO</p>
      <p>Hedging portfolio: TODO</p>

      <MyMap />

      <Link to="/accept" className="btn btn-light">
        Continue &rarr;
      </Link>
    </Container>
  );
};

const mapStateToProps = ({ userState }) => ({
  location: userState.location,
  assetsValue: userState.assetsValue,
});

Forecast.propTypes = {
  location: PropTypes.shape({
    lng: PropTypes.number,
    lat: PropTypes.number,
  }).isRequired,
  assetsValue: PropTypes.number.isRequired,
};

// Redux config
export default connect(
  mapStateToProps,
)(Forecast);
