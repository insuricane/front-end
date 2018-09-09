import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getQuote } from '../../actions/quoteActions';

import ErrorMessage from '../shared/ErrorMessage';
import Portfolio from './Portfolio';
import Line from '../shared/Line';

const getPercent = (probability) => {
  const percentNum = Number(probability) * 100;

  return `${percentNum.toFixed(3)}%`;
};

const floatStyles = {
  float: 'right',
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
      factor,
      firstName,
    } = this.props;

    if (loading) return (<p>Loading...</p>);

    return (
      <div>
        <p>
          <i>
            Hi&nbsp;
            {firstName}
            , here&#39;s what we came up with:
          </i>
        </p>
        <p>
          <strong>Policy value:</strong>
          <span style={floatStyles}>
            $
            {Number(assetsValue).toFixed(2)}
            &nbsp;USD
          </span>
        </p>

        <ErrorMessage error={quoteError} />

        {
          !quoteError && (
            <div>
              <p>
                <strong>Down payment:</strong>
                <span style={floatStyles}>
                  $
                  {(factor * Number(assetsValue)).toFixed(2)}
                  &nbsp;USD
                </span>
              </p>

              <p>
                <strong>Probability of destruction:</strong>
                <span style={floatStyles}>
                  {getPercent(probDestruction)}
                </span>
              </p>

              <Line />

              <p>
                <i>Or, try hedging yourself:</i>
              </p>
              <Portfolio />
            </div>
          )
        }
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
  factor: quoteState.factor,
  firstName: userState.firstName,
});

const mapDispatchToProps = dispatch => ({
  dispatchGetQuote: state => dispatch(getQuote(state)),
});

ForecastInfo.defaultProps = {
  quoteError: '',
  probDestruction: 0,
  loading: false,
  factor: 1,
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
  factor: PropTypes.number,
  firstName: PropTypes.string.isRequired,
};

// Redux config
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForecastInfo);
