import React from "react";
import { HashRouter, Redirect } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header/Header";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user-actions";
import "./App.scss";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
  }
  render() {
    return (
      <HashRouter>
        <Header />
        {routes}
      </HashRouter>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
