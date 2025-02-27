import React from "react";
import "../Login/Login.css";

function Login() {
  return (
    <>
      <div className="form-div">
        <h1 className="mb-4">Welcome</h1>
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
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
