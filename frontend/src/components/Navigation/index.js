import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
// import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

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
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
    );
  }

  return (
    <div className="main-nav-container">

      <div className="sub-nav-container">

        <div className="logo-container">
          <Link className="logo" to="/"></Link>
        </div>

        <div className="nav-menu-container">
          <nav className="nav-list">
            <ul>
              <li className="menu-item">About</li>
              <li className="menu-item">Menu</li>
              <li className="menu-item">Reviews</li>
              <li className="menu-item">Reservations</li>
              <li id="order" className="menu-item">Order Online</li>
              {isLoaded && sessionLinks}
            </ul>
          </nav>
        </div>

      </div>

    </div>
  );
}

export default Navigation;
