import React from "react";
import "./SignIn.css";
function SignIn() {
  return (
    <>
      <div className="signin-background"></div>
      <div className="signin-container">
        <div className="form-background">
          <div className="form-container">
            <div className="form-title">Sign In</div>
            <form action="" className="form">
              <div>
                <input className="form-input" type="text" placeholder="Email Or Phone Number" />
              </div>
              <div>
                <input className="form-input" type="text" placeholder="Password" />
              </div>
            </form>

            <button className="form-button">SignIn</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
