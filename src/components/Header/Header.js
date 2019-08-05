import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link className="logo-container" to="/">
          {/* <Logo className="logo" /> */}
          <img
            src="https://images.vexels.com/media/users/3/158737/isolated/preview/3353b3a06bc810221952cccbbb189b47-record-rarity-vinyl-illustration-by-vexels.png"
            alt="vinyl record"
          />
        </Link>
        <div className="navigators">
          <Link className="navigator" to="/register_login">
            LOGIN
          </Link>
          <Link className="navigator" to="/vinyl_shop">
            SHOP
          </Link>
          <Link className="navigator" to="/cart">
            CART
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
