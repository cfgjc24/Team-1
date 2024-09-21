import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AuthErrorCodes, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { firebaseApp } from "../helpers/firebaseConfig";
import './Account.css';

function Signup() {
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

    // creating a new user
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        console.log(userCredential.user);
        // ...
      })
      .catch((err) => {
        if (err.code === AuthErrorCodes.WEAK_PASSWORD) {
        setError("The password is too weak.");
      } else if (err.code === AuthErrorCodes.EMAIL_EXISTS) {
        setError("The email address is already in use.");
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
        <div className="form-title">
            <h1 className="form-title-label">Create Account</h1>
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
              Create account
            </button>
          </Link>
        </div>
        <div className="option">
        <p>
          Already have an account?
          <Link to="/login" className="link"> Login</Link>
        </p>
      </div>
      </form>
    </div>
  );
}
export default Signup;