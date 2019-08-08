import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart-actions";
import { selectCartItemsCount } from "../../redux/cart-selectors";
import "./SleeveIcon.scss";

const SleeveIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="sleeve-icon" onClick={toggleCartHidden}>
    <img
      className="shopping-icon"
      src="https://cdn.pixabay.com/photo/2017/11/06/15/52/blank-vinyl-record-jacket-2924018_960_720.jpg"
      alt="record sleeve"
    />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SleeveIcon);
