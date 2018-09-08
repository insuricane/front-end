import React, { Component } from 'react';
import Input from '../forms/Input';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      assetsValue: null,
    };

    this.handleChange = this.handleChange.bind(this);
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

  render() {
    const {
      firstName,
      lastName,
      assetsValue,
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
        </div>
      </form>
    );
  }
}

export default Form;
