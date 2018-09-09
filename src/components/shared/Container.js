import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => (
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
        {children}
      </div>
    </div>
  </div>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

export default Container;
