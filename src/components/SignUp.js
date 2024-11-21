import React, { useState } from "react";
import { faEnvelope, faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';  // Import useNavigate

import { auth, db } from "./firebaseConfig";  // Import Firebase config
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function SignUp() {
  const [action, setAction] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();  // Initialize useNavigate

  const handleSignUp = async () => {
    console.log("Sign Up - Name:", name);
    console.log("Sign Up - Email:", email);
    console.log("Sign Up - Password:", password);
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save additional user information to Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: email,
        name: name
      });

      console.log('User signed up and data saved successfully!');
      navigate('/Home');  // Navigate to home page after successful sign-up
    } catch (error) {
      console.error('Error signing up:', error);
      alert(error.message);  // Display error message to user
    }
  };

  const handleLogin = async () => {
    console.log("Login - Email:", email);
    console.log("Login - Password:", password);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in successfully!');
      navigate('/Home');  // Navigate to home page after successful login
    } catch (error) {
      console.error('Error logging in:', error);
      alert(error.message);  // Display error message to user
    }
  };

  return (
    <div className="signup-container">
      <div className="headerx">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? null : (
          <div className="input">
            <FontAwesomeIcon icon={faUser} className="input-icon" />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}
        <div className="input">
          <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <FontAwesomeIcon icon={faKey} className="input-icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {action === "Login" ? (
          <div className="forgot-password">
            Lost Password? <span>Click Here!</span>
          </div>
        ) : null}
        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => setAction("Login")}
          >
            Login
          </div>
          {action === "Sign Up" && (
            <div className="submit" onClick={handleSignUp}>
              Submit
            </div>
          )}
          {action === "Login" && (
            <div className="submit" onClick={handleLogin}>
              Submit
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
