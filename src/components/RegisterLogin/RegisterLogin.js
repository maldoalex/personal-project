import React from "react";
import axios from "axios";

import "./RegisterLogin.scss";

class Register_LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      username: "",
      password: "",
      newUsername: "",
      newPassword: ""
    };
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleFirstNameInput(value) {
    this.setState({ first_name: value });
  }

  handleLastNameInput(value) {
    this.setState({ last_name: value });
  }

  handleEmailInput(value) {
    this.setState({ email: value });
  }

  handleUsernameInput(value) {
    this.setState({ username: value });
  }

  handlePasswordInput(value) {
    this.setState({ password: value });
  }

  handleNewUsernameInput(value) {
    this.setState({ newUsername: value });
  }

  handleNewPasswordInput(value) {
    this.setState({ newPassword: value });
  }

  login() {
    const { username, password } = this.state;
    axios
      .post("/auth/login", { username, password })
      .then(() => {
        this.setState({ username: "", password: "" });
      })
      .catch(err => alert(err.response.request.response));
  }

  register() {
    const {
      first_name,
      last_name,
      email,
      newUsername,
      newPassword
    } = this.state;
    axios
      .post("/auth/register", {
        first_name,
        last_name,
        email,
        newUsername,
        newPassword
      })
      .then(() => {
        this.setState({
          first_name: "",
          last_name: "",
          email: "",
          newUsername: "",
          newPassword: ""
        });
      })
      .catch(err => {
        this.setState({ username: "", password: "" });
        alert("error");
        console.log(err);
      });
  }

  logout() {
    axios
      .get("/auth/logout")
      .then(() => {
        this.setState({
          first_name: "",
          last_name: "",
          email: "",
          username: "",
          password: ""
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const {
      first_name,
      last_name,
      email,
      username,
      password,
      newUsername,
      newPassword
    } = this.state;
    return (
      <div className="register-login">
        <div className="register">
          <h2>Register With Us</h2>
          <span>Please fill out fields</span>

          <div className="registerContainer">
            <input
              placeholder="First Name"
              type="text"
              onChange={e => this.handleFirstNameInput(e.target.value)}
              value={first_name}
            />
            <input
              placeholder="Last Name"
              type="text"
              onChange={e => this.handleLastNameInput(e.target.value)}
              value={last_name}
            />
            <input
              placeholder="Email"
              type="text"
              onChange={e => this.handleEmailInput(e.target.value)}
              value={email}
            />
            <input
              placeholder="Username"
              type="text"
              onChange={e => this.handleNewUsernameInput(e.target.value)}
              value={newUsername}
            />
            <input
              type="password"
              placeholder="Password"
              value={newPassword}
              onChange={e => this.handleNewPasswordInput(e.target.value)}
            />
          </div>
        </div>
        <div className="login">
          <h2>Login</h2>
          <span>Please enter username and password</span>

          <div className="loginContainer">
            <input
              placeholder="Username"
              type="text"
              onChange={e => this.handleUsernameInput(e.target.value)}
              value={username}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => this.handlePasswordInput(e.target.value)}
            />
            <button onClick={this.login}>Login</button>
            <button onClick={this.register}>Register</button>
            <button type="submit" onClick={this.logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Register_LogIn;
