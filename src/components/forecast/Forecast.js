import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';

import MyMap from './MyMap';
import ForecastInfo from './ForecastInfo';
import Container from '../shared/Container';

const rightStyles = {
  width: '100%',
  textAlign: 'right',
};

const Forecast = ({ location, positions }) => {
  if (!(location && location.lat && location.lng)) {
    return (<Redirect to="/" />);
  }

  // Only show the link to continue if a portfolio was returned and we have
  // finished loading all data
  const shouldShowContinue = () => {
    if (!positions) return false;

    const tickers = Object.keys(positions);

    return Boolean(tickers && tickers.length);
  };

  return (
    <Container>
      <ForecastInfo />

      <MyMap />

      {
        shouldShowContinue() && (
          <div style={rightStyles}>
            <Link to="/accept" className="btn btn-light">
              Continue &rarr;
            </Link>
          </div>
        )
      }
    </Container>
  );
};

const mapStateToProps = ({ userState, quoteState }) => ({
  location: userState.location,
  positions: quoteState.positions,
});

Forecast.defaultProps = {
  positions: {},
};

Forecast.propTypes = {
  location: PropTypes.shape({
    lng: PropTypes.number,
    lat: PropTypes.number,
  }).isRequired,
  positions: PropTypes.object, // eslint-disable-line
};

// Redux config
export default connect(
  mapStateToProps,
)(Forecast);
