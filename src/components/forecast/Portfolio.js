import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import WarningMessage from '../shared/WarningMessage';

import './Portfolio.css';

const Portfolio = ({
  loading,
  positions,
  error,
  factor,
  assetsValue,
}) => {
  if (loading || error) return null;

  if (!factor || !assetsValue || typeof factor !== 'number') return null;

  const downPayment = factor * assetsValue;

  const tickers = positions && Object.keys(positions);

  if (!tickers || !tickers.length) {
    return (
      <WarningMessage warning="Empty portfolio returned." />
    );
  }

  const investments = tickers.map(ticker => (
    {
      ticker,
      amount: downPayment * positions[ticker],
    }
  ));

  investments.sort((a, b) => (
    b.amount - a.amount
  ));

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Ticker</th>
          <th scope="col">Amount (USD)</th>
        </tr>
      </thead>
      <tbody>
        {
          investments.map(({ ticker, amount }) => (
            <tr key={ticker}>
              <td>
                {ticker}
              </td>
              <td>
                $
                {amount.toFixed(2)}
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

const mapStateToProps = ({ quoteState, userState }) => ({
  loading: quoteState.loading,
  positions: quoteState.positions,
  error: quoteState.error,
  factor: quoteState.factor,
  assetsValue: userState.assetsValue,
});

Portfolio.defaultProps = {
  positions: {},
  error: '',
  loading: false,
  factor: 1,
};

Portfolio.propTypes = {
  error: PropTypes.string,
  positions: PropTypes.object, // eslint-disable-line
  loading: PropTypes.bool,
  factor: PropTypes.number,
  assetsValue: PropTypes.string.isRequired,
};

// Redux config
export default connect(
  mapStateToProps,
)(Portfolio);
