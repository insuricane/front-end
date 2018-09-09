import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import WarningMessage from '../shared/WarningMessage';

const Portfolio = ({ loading, positions, error }) => {
  if (loading || error) return null;

  const tickers = positions && Object.keys(positions);

  if (!tickers || !tickers.length) {
    return (
      <WarningMessage warning="Empty portfolio returned." />
    );
  }

  return (
    <div>
      {
        tickers.map(ticker => (
          <p key={ticker}>
            {positions[ticker]}
          </p>
        ))
      }
    </div>
  );
};

const mapStateToProps = ({ quoteState }) => ({
  loading: quoteState.loading,
  positions: quoteState.positions,
  error: quoteState.error,
});

Portfolio.defaultProps = {
  positions: {},
  error: '',
  loading: false,
};

Portfolio.propTypes = {
  error: PropTypes.string,
  positions: PropTypes.object, // eslint-disable-line
  loading: PropTypes.bool,
};

// Redux config
export default connect(
  mapStateToProps,
)(Portfolio);
