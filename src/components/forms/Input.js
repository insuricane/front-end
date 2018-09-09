import React from 'react';
import PropTypes from 'prop-types';

const inputStyles = {
  borderWidth: '2px',
};

const labelStyles = {
  fontSize: '0.8em',
  marginBottom: '0.4em',
};

const Input = ({
  label,
  value,
  name,
  type,
  placeholder,
  handleChange,
  id,
}) => (
  <div className="form-group">
    {label && (
      <label htmlFor={name} style={labelStyles}>
        { label }
      </label>
    )}

    <input
      style={inputStyles}
      className="form-control"
      value={value}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      id={id}
    />
  </div>
);

Input.defaultProps = {
  label: '',
  placeholder: '',
  id: '',
};

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.string,
};

export default Input;
