import React, { Component } from 'react';
import Input from '../forms/Input';
import InputLocation from '../forms/InputLocation';

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
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
  }

  handleChange(event) {
    const {
      name,
      value,
    } = event.target;

    this.setState({
      [name]: value,
    });
  }

  handleChangeLocation(lat, lng) {
    this.setState({
      location: { lat, lng },
    });
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
      <form>
        <div className="row">
          <div className="col-12 col-md-6">
            <Input
              label="First name"
              value={firstName}
              name="firstName"
              type="text"
              handleChange={this.handleChange}
            />
          </div>

          <div className="col-12 col-md-6">
            <Input
              label="Last name"
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
              label="Worth of insurable assets (USD)"
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
          (location && location.lat && location.lng) ? (
            <p>
              {location.lat}
              ,
              {location.lng}
            </p>
          ) : (
            null
          )
        }
      </form>
    );
  }
}

export default Form;
