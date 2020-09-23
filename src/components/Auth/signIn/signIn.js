import React from "react";
import "./signin.css";
import { signInWithGoogle } from "./../../../firebase/firebase.util";

const SignIn = () => {
  return (
    <div className="sign-in-wrapper">
      {" "}
      <div className="button-wrapper">
        <button className="signIn" onClick={signInWithGoogle}>
          {" "}
          Sign-In with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
