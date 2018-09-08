import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      houseValue: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ houseValue: event.target.value });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="First Name"
          onChange={this.handleChange.bind(this)}
        />
      </form>
    );
  }
}

export default Home;
