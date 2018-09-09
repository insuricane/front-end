import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../forms/Input';
import InputLocation from '../forms/InputLocation';

const btnStyles = {
  marginBottom: '1rem',
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

  handleChangeLocation(lat, lng, address) {
    this.setState({
      location: { lat, lng },
      address,
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
              label="Home Value (USD)"
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

        <Link to="/forecast" className="btn btn-primary" style={btnStyles}>
          Submit
        </Link>

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
