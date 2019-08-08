import React from "react";
import { connect } from "react-redux";

import CustomButton from "../CustomButton/CustomButton";
import CheckoutItem from "../CheckoutItem/CheckoutItem";
import { selectCartItems } from "../../redux/cart-selectors";
import "./CartSleeve.scss";

const CartSleeve = ({ cartItems }) => (
  <div className="sleeve-slide">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartSleeve);
