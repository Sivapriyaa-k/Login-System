import React from "react";
import "../Login/Login.css";
import google from "../../assets/images/google.webp";

// import google from "assets/images/google.webp";
function Login() {
  return (
    <>
      <div className="form-div">
        <h1 className="mb-1">Welcome 2</h1>
        <p>Please Enter Your Details</p>
        <form>
          <div className="form-group  mb-4">
            <input type="text" id="username" placeholder="Username" />
          </div>
          <div className="form-group mb-4">
            <input type="password" id="password" placeholder="password" />
          </div>
          <div className="form-btn  mt-4">
            <button type="button" id="login">
              Sign in
            </button>
            <button type="button" id="google-signin" className="bg-none">
              <img src={google} /> Sign in with Google
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
