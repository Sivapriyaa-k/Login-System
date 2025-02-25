import React from "react";
import "../Login/Login.css";

function Login() {
  return (
    <>
      <div className="form-div">
        <h1 className="mb-4">Welcome</h1>
        <form>
          <div className="form-group">
            <label for="username">Enter Your Username</label>
            <input type="text" id="username" />
          </div>
          <div className="form-group">
            <label for="password">Enter Your Password</label>
            <input type="password" id="password" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
