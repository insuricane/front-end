import React from 'react';
import PropTypes from 'prop-types';

const errorStyles = {
  borderWidth: '2px',
};

const ErrorMessage = ({ error = '' }) => {
  if (!error) return null;

  return (
    <div className="alert alert-danger" style={errorStyles}>
      { error }
    </div>
  );
};

ErrorMessage.defaultProps = {
  error: '',
};

ErrorMessage.propTypes = {
  error: PropTypes.string,
};

export default ErrorMessage;
