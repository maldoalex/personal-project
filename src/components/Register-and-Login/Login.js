import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./Login.scss";

class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    // const { username, password } = this.state;
    this.setState({ username: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="log-in">
        <span>Sign in with your username and password</span>

        <form onSubmit={this.handleSubmit}>
          <input
            name="username"
            type="username"
            handlechange={this.handleChange}
            value={this.state.username}
            label="username"
            required
          />
          <input
            name="password"
            type="password"
            value={this.state.password}
            handlechange={this.handleChange}
            label="password"
            required
          />
          <CustomButton type="submit"> Log in </CustomButton>
        </form>
      </div>
    );
  }
}

export default LogIn;
