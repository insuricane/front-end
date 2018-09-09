import React from 'react';
import PropTypes from 'prop-types';

const warningStyles = {
  borderWidth: '2px',
};

const WarningMessage = ({ warning }) => {
  if (!warning) return null;

  return (
    <div className="alert alert-warning" style={warningStyles}>
      { warning }
    </div>
  );
};

WarningMessage.defaultProps = {
  warning: '',
};

WarningMessage.propTypes = {
  warning: PropTypes.string,
};

export default WarningMessage;
