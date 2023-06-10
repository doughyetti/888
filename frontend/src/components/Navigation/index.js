import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { cartUiActions } from "../../store/cartUiSlice";
import './Navigation.css';

function Navigation({ isLoaded }){
  const dispatch = useDispatch();

  const sessionUser = useSelector(state => state.session.user);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <li className="menu-icon">
        <ProfileButton user={sessionUser} />
      </li>
    );
  } else {
    sessionLinks = (
      <li>
        <OpenModalButton
          buttonText="Log In"
          modalComponent={<LoginFormModal />}
        />
        <OpenModalButton
          buttonText="Sign Up"
          modalComponent={<SignupFormModal />}
        />
      </li>
    );
  };

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  const handleHomeClick = () => {
    document.getElementById("home-section").scrollIntoView({ behavior: "smooth"});
  };

  const handleAboutClick = () => {
    document.getElementById("about-section").scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleMenuClick = () => {
    document.getElementById("menu-section").scrollIntoView({ behavior: "smooth", block: "start"});
  };

  const handleReviewsClick = () => {
    document.getElementById("reviews-section").scrollIntoView({ behavior: "smooth"});
  };

  return (
    <div className="main-nav-container">

      <div className="sub-nav-container">

        <div className="logo-container" onClick={handleHomeClick}>
          <Link className="logo" to="/"></Link>
          <h1>Pan Asian Restaurant</h1>
        </div>

        <div className="nav-menu-container">
          <nav className="nav-list">
            <ul>
              <li className="menu-item" onClick={handleAboutClick}>ABOUT</li>
              <li className="menu-item" onClick={handleMenuClick} >MENU</li>
              <li className="menu-item" onClick={handleReviewsClick}>REVIEWS</li>
              <li className="menu-item">RESERVATIONS</li>
              <li id="order" className="menu-item" onClick={handleMenuClick} >ORDER ONLINE</li>
              <li className="menu-item-cart">
                <button className="cart-icon"><i className="fa-solid fa-basket-shopping" onClick={toggleCart}></i></button>
                <span className="cart-badge">{totalQuantity}</span>
              </li>
              {isLoaded && sessionLinks}
            </ul>
          </nav>
        </div>

      </div>

    </div>
  );
}

export default Navigation;
