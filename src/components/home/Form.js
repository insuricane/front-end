import React, { Component } from 'react';
import Input from '../forms/Input';
import InputLocation from '../forms/InputLocation';
import ErrorMessage from '../shared/ErrorMessage';

const rightStyles = {
  width: '100%',
  textAlign: 'right',
};

const btnStyles = {
  marginBottom: '1rem',
  textAlign: 'center',
  padding: '0.4rem 0.8rem',
};

const validEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line

  return re.test(String(email).toLowerCase());
};

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      assetsValue: 0,
      address: '',
      location: {},
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.isDisabled = this.isDisabled.bind(this);
  }

  isDisabled() {
    const {
      firstName,
      lastName,
      assetsValue,
      address,
      location,
      email,
    } = this.state;

    return !(
      firstName
      && lastName
      && assetsValue > 0
      && address
      && location
      && location.lat
      && location.lng
      && email
    );
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  handleChangeLocation({ lat, lng, name }) {
    const {
      address,
    } = this.state;

    this.setState({
      location: {
        lat,
        lng,
      },
      address: name || address,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.isDisabled()) return;

    this.setState({ error: '' });

    const { email } = this.state;

    if (!validEmail(email)) {
      this.setState({
        error: 'Please enter a valid email',
      });
      return;
    }

    console.log('SUBMITTED', this.state);
  }

  render() {
    const {
      firstName,
      lastName,
      assetsValue,
      address,
      location,
      email,
      error,
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <ErrorMessage error={error} />

        <div className="row">
          <div className="col-12 col-md-6">
            <Input
              label="First Name"
              value={firstName}
              name="firstName"
              type="text"
              handleChange={this.handleChange}
            />
          </div>

          <div className="col-12 col-md-6">
            <Input
              label="Last Name"
              value={lastName}
              name="lastName"
              type="text"
              handleChange={this.handleChange}
            />
          </div>
        </div>

        <Input
          label="Email"
          value={email}
          name="email"
          type="email"
          handleChange={this.handleChange}
        />

        <div className="row">
          <div className="col-12 col-md-6">
            <Input
              label="Policy Value (USD)"
              value={assetsValue}
              name="assetsValue"
              type="number"
              handleChange={this.handleChange}
            />
          </div>

          <div className="col-12 col-md-6">
            <InputLocation
              label="Property Address"
              value={address}
              name="address"
              type="text"
              handleChange={this.handleChange}
              callback={this.handleChangeLocation}
            />
          </div>
        </div>

        {
          !this.isDisabled() && (
            <div style={rightStyles}>
              <button
                type="submit"
                className="btn btn-light"
                style={btnStyles}
              >
                Continue &rarr;
              </button>
            </div>
          )
        }

        {location && location.lat && location.lng ? (
          <p>
            {location.lat}
            ,&nbsp;
            {location.lng}
          </p>
        ) : null}
      </form>
    );
  }
}

export default Form;
