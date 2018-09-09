import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getQuote } from '../../actions/quoteActions';

import ErrorMessage from '../shared/ErrorMessage';
import Portfolio from './Portfolio';

const getPercent = (probability) => {
  const percentNum = Number(probability) * 100;

  return `${percentNum.toFixed(3)}%`;
};

class ForecastInfo extends Component {
  componentDidMount() {
    const {
      dispatchGetQuote,
      location,
    } = this.props;

    dispatchGetQuote(location);
  }

  render() {
    const {
      assetsValue,
      quoteError,
      probDestruction,
      loading,
    } = this.props;

    if (loading) return (<p>Loading...</p>);

    return (
      <div>
        <p>
          <strong>Policy value:</strong>
          &nbsp;
          $
          {assetsValue}
          &nbsp;USD
        </p>

        <ErrorMessage error={quoteError} />

        <p>
          <strong>Probability of destruction:</strong>
          &nbsp;
          {getPercent(probDestruction)}
        </p>

        <p>
          <strong>Hedging portfolio:</strong>
        </p>
        <Portfolio />
      </div>
    );
  }
}

const mapStateToProps = ({ userState, quoteState }) => ({
  location: userState.location,
  assetsValue: userState.assetsValue,
  quoteError: quoteState.error,
  loading: quoteState.loading,
  probDestruction: quoteState.probDestruction,
});

const mapDispatchToProps = dispatch => ({
  dispatchGetQuote: state => dispatch(getQuote(state)),
});

ForecastInfo.defaultProps = {
  quoteError: '',
  probDestruction: 0,
  loading: false,
};

ForecastInfo.propTypes = {
  location: PropTypes.shape({
    lng: PropTypes.number,
    lat: PropTypes.number,
  }).isRequired,
  assetsValue: PropTypes.string.isRequired,
  dispatchGetQuote: PropTypes.func.isRequired,
  quoteError: PropTypes.string,
  probDestruction: PropTypes.number,
  loading: PropTypes.bool,
};

// Redux config
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForecastInfo);
