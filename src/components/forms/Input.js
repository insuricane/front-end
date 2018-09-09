import React from 'react';
import PropTypes from 'prop-types';

const inputStyles = {
  borderWidth: '2px',
  padding: '0.5rem 0.75rem',
  fontSize: '1rem',
  height: 'auto',
  marginBottom: '1rem',
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
  autocomplete,
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
      autoComplete={autocomplete ? '' : 'off'}
      id={id}
    />
  </div>
);

Input.defaultProps = {
  label: '',
  placeholder: '',
  id: '',
  autocomplete: true,
};

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.string,
  autocomplete: PropTypes.bool,
};

export default Input;
