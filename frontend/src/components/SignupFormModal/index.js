import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.length < 10 || phoneNumber.length > 10) {
      return setErrors({
        phoneNumber: "Phone number must be 10 characters long"
      })
    }
    if (password === confirmPassword) {
      setErrors({});
      return dispatch(
        sessionActions.signup({
          firstName,
          lastName,
          email,
          password,
          phoneNumber
        })
      )
        .then(closeModal)
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) {
            setErrors(data.errors);
          }
        });
    }
    return setErrors({
      confirmPassword: "Confirm Password field must be the same as the Password field"
    });
  };

  return (
    <>
      <div className="signup-modal-container">
        <div className="signup-img">
          <i className="fa-solid fa-user-astronaut"></i>
        </div>

        {errors.firstName && <p>{errors.firstName}</p>}
        {errors.lastName && <p>{errors.lastName}</p>}
        {errors.email && <p>{errors.email}</p>}
        {errors.password && <p>{errors.password}</p>}
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        {errors.phoneNumber && <p>{errors.phoneNumber}</p>}

        <form onSubmit={handleSubmit}>
          <div className="signup-form-container">

            <input className="form-input-box"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              required
            />

            <input className="form-input-box"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              required
            />

            <input className="form-input-box"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />

            <input className="form-input-box"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />

            <input className="form-input-box"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
            />

            <input className="form-input-box"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Them Digits"
              required
            />

            <button className="form-btn" type="submit">Sign Up</button>

          </div>
        </form>
      </div>
    </>
  );
}

export default SignupFormModal;
