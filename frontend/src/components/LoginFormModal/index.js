import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css"

function LoginFormModal() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.login({ credential, password }))
      .then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      });
  };

  return (
    <>
      <div className="login-modal-container">
        <div className="login-img">
          <i class="fa-solid fa-lock-open"></i>
        </div>

        {errors.credential && <p>{errors.credential}</p>}

        <form onSubmit={handleSubmit}>
          <div className="login-form-container">

            <input className="form-input-box"
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
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

            <button className="form-btn" type="submit">Log In</button>

          </div>
        </form>
      </div>
    </>
  );
}

export default LoginFormModal;
