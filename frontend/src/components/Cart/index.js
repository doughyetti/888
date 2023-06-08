import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup } from "reactstrap";
import CartItem from "./cartItem";
import { cartUiActions } from "../../store/cartUiSlice";
import "./Cart.css";

const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  return (
    <div className="cart-main-container">
      <ListGroup className="cart">

        <div className="cart-close" onClick={() => toggleCart()}>
          <span>
            <i className="fa-solid fa-xmark"></i>
          </span>
        </div>

        <div className="cart-item-list">
          {!cartProducts.length ? <h4 className="empty-cart-message">{`No items added to the cart! Go buy something :]`}</h4>
            : cartProducts.map((item, idx) => (
              <CartItem item={item} key={idx} />
            ))
          }
        </div>

        <div className="cart-bottom">
          <h6>Subtotal: <span>${totalAmount}</span></h6>
          <button>Checkout</button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
