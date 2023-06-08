import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import "./Navigation.css"

function ProfileButton() {
  const user = useSelector(state => state.session.user);

  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <>
      <button className="user-icon" onClick={openMenu}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <ul className={ulClassName} ref={ulRef}>
        <li>{user.firstName} {user.lastName}</li>
        <li>
          <button onClick={logout}>Log Out</button>
        </li>
      </ul>
    </>
  );
}

export default ProfileButton;
