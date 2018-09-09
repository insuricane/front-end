import React, { Component } from 'react';
import Input from '../forms/Input';
import InputLocation from '../forms/InputLocation';

const rightStyles = {
  width: '100%',
  textAlign: 'right',
};

const btnStyles = {
  marginBottom: '1rem',
  textAlign: 'center',
  padding: '0.4rem 0.8rem',
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
    } = this.state;

    return !(
      firstName
      && lastName
      && assetsValue > 0
      && address
      && location
      && location.lat
      && location.lng
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

    console.log('SUBMITTED', this.state);
  }

  render() {
    const {
      firstName,
      lastName,
      assetsValue,
      address,
      location,
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
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
              label="Address"
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
