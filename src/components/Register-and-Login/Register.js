import React, { Component } from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./Register.scss";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    // const { username, email, password } = this.state;

    this.setState({
      username: "",
      email: "",
      password: ""
    });
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { username, email, password } = this.state;
    return (
      <div className="register">
        <span>Register with your email and password</span>
        <form className="register-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
            label="username"
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <CustomButton type="submit">Register</CustomButton>
        </form>
      </div>
    );
  }
}

export default Register;
