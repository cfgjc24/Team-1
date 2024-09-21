import React, { useState } from "react";
import { Link } from "react-router-dom";
import {  AuthErrorCodes, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "../helpers/firebaseConfig";
import './Account.css';

function Login() {
  const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  // initialised auth instance
  const auth = getAuth(firebaseApp);

// handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    let email = input.email.toLowerCase().trim();
    let password = input.password;

    // sign in user
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential.user);
        // ...
      })
      .catch((err) => {
        if (
        err.code === AuthErrorCodes.INVALID_PASSWORD ||
        err.code === AuthErrorCodes.USER_DELETED
      ) {
        setError("The email address or password is incorrect");
      } else {
        console.log(err.code);
        alert(err.code);
      }
      });
  };

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="form-all">
       <div className="account-form-title">
        <h1 className="form-title-label">Login</h1>
       </div>
      <form autoComplete="off" className="form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="label-name">
            <span className="content-name">Email</span>
        </label>
        <div className="email-input">
          <input
            name="email"
            placeholder="Enter email"
            type="text"
            onChange={handleChange}
            value={input.email}
            required
            autoComplete="true"
            className="inputStyle"
          />
        </div>
        <label htmlFor="password" className="label-name">
            <span className="content-name">Password</span>
        </label>
        <div className="password-input">
          <input
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
            value={input.password}
            type="password"
            required
            autoComplete="true"
            className="inputStyle"
          />
        </div>
        <div className="btn">
          {error ? <p className="login-error">{error}</p> : null}
          <Link to="/menu" className="link">
            <button className="submitButton" title="Login" aria-label="Login" type="submit">
              Login
            </button>
          </Link>
        </div>
        <div className="option">
        <p>
          Don't have an account?
          <Link to="/create" className="link"> Create Account</Link>
        </p>
      </div>
      </form>
    </div>
  );
}

export default Login;