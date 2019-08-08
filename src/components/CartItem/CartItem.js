import React from "react";

import "./CartItem.scss";
import CustomButton from "../CustomButton/CustomButton";

const CartItem = ({ cartItem: { name, image, price, quantity } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={image} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button">&#10005;</div>
    <CustomButton inverted>Add to Cart</CustomButton>
  </div>
);

export default CartItem;
