import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SleeveIcon from "../SleeveIcon/SleeveIcon";
import CartSleeve from "../CartSleeve/CartSleeve";
import "./Header.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img
        src="https://images.vexels.com/media/users/3/158737/isolated/preview/3353b3a06bc810221952cccbbb189b47-record-rarity-vinyl-illustration-by-vexels.png"
        alt="vinyl record"
      />
    </Link>
    <div className="navigators">
      <Link className="navigator" to="/shop">
        SHOP
      </Link>
      {currentUser ? (
        <div className="navigator">LOG OUT</div>
      ) : (
        <Link className="navigator" to="/register_login">
          LOG IN
        </Link>
      )}
      <Link className="navigator" to="/cart">
        CART
      </Link>
      <SleeveIcon />
      {/* <Link className="navigator" to="/register_login">
            LOGIN
          </Link> */}
    </div>
    {hidden ? null : <CartSleeve />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});
export default connect(mapStateToProps)(Header);

{
  /* class Header extends Component {
      render() {
    return (
      <div className="header">
      <Link className="logo-container" to="/">
        <img
          src="https://images.vexels.com/media/users/3/158737/isolated/preview/3353b3a06bc810221952cccbbb189b47-record-rarity-vinyl-illustration-by-vexels.png"
          alt="vinyl record"
        />
      </Link>

      <div className="navigators">
        {currentUser ? (
          <div className="navigator" onClick={() => auth.signOut()}>
            SIGN OUT
        </div>
        ) : (
            <Link className="navigator" to="/register_login">
              LOG IN
        </Link>
          )}
        <Link className="navigator" to="/register_login">
            LOGIN
          </Link>
        <Link className="navigator" to="/shop">
          SHOP
          </Link>
        <Link className="navigator" to="/cart">
          CART
          </Link>
      </div>
    </div>
    );
  }
} */
}
