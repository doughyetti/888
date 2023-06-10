import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from 'react-redux';
import OpenModalButton from '../OpenModalButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import * as sessionActions from '../../store/session';
import "./Navigation.css"

function ProfileButton({ user }) {
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

  const closeMenu = () => setShowMenu(false);

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
        {user ? (
          <div className="profile-button-dropdown">
            <div className="profile-user-info">
              <li className="profile-user-name">{user.firstName} {user.lastName}</li>
              <li className="profile-user-name">{user.email}</li>
              <li>
                <button className="profile-modal-btn" onClick={logout}>Log Out</button>
              </li>
            </div>
          </div>
        ) : (
          <div className="profile-button-dropdown">
            <div className={ulClassName}>

              <li>
                <OpenModalButton
                  buttonText="Log In"
                  onButtonClick={closeMenu}
                  modalComponent={<LoginFormModal />}
                />
              </li>

              <li>
                <OpenModalButton
                  buttonText="Sign Up"
                  onButtonClick={closeMenu}
                  modalComponent={<SignupFormModal />}
                />
              </li>

            </div>
          </div>
        )}
      </ul>
    </>
  );
}

export default ProfileButton;
