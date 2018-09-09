import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ForecastInfo = ({ assetsValue }) => (
  <div>
    <p>
      <strong>Policy value:</strong>
      &nbsp;
      $
      {assetsValue}
      &nbsp;USD
    </p>

    <p>Probability of destruction: TODO</p>
    <p>Hedging portfolio: TODO</p>
  </div>
);

const mapStateToProps = ({ userState }) => ({
  location: userState.location,
  assetsValue: userState.assetsValue,
});

ForecastInfo.propTypes = {
  location: PropTypes.shape({
    lng: PropTypes.number,
    lat: PropTypes.number,
  }).isRequired,
  assetsValue: PropTypes.string.isRequired,
};

// Redux config
export default connect(
  mapStateToProps,
)(ForecastInfo);
