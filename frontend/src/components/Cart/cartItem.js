import React from "react";
import { useDispatch } from "react-redux";
import { ListGroupItem } from "reactstrap";
import { cartActions } from "../../store/cart";
import "./Cart.css";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const { id, name, price, quantity, totalPrice } = item;

  const incrementItem = () => {
    dispatch(cartActions.addItem({
      id,
      name,
      price
    }))
  };

  const decrementItem = (id) => {
    dispatch(cartActions.removeItem(id));
  };

  const deleteItem = (id) => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <ListGroupItem className="list-group-item-wrapper">
      <div className="cart-item-info">
        <div className="cart-item-margins">

          <div className="cart-item-title-container">
            <h6 className="cart-item-name">{name}</h6>
            <span>${price}</span>
          </div>

          <div className="cart-item-price-container">
            <h2 className="cart-item-price">${totalPrice}</h2>
          </div>

          <div className="cart-item-quantity-container">
            <div className="cart-item-quantity">
              <span className="quantity-btn">
                <i className="fa-solid fa-minus" onClick={() => decrementItem(id)}></i>
              </span>

              <span>{quantity}</span>

              <span className="quantity-btn">
                <i className="fa-solid fa-plus" onClick={() => incrementItem()}></i>
              </span>
            </div>
          </div>

        </div>

      </div>

      <span className="cart-item-delete-btn">
        <i className="fa-solid fa-xmark" onClick={() => deleteItem(id)}></i>
      </span>
      
    </ListGroupItem>
  )
};

export default CartItem;
