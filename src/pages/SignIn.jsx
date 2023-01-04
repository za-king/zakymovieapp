import React from "react";
import "./SignIn.css";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { userLogin } from "../utils/loginSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function SignIn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {

      try {
        const result = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo',{
        headers:{
          "Authorization" : `Bearer ${tokenResponse.access_token}`
        }
      })
      dispatch(userLogin(result.data))
      navigate('/dashboard')
      } catch (error) {
        console.log(error.message)
      }
      
    },
  });
  return (
    <>
      <div className="signin-background"></div>
      <div className="signin-container">
        <div className="form-background">
          <div className="form-container">
            <div className="form-title">Sign In</div>
            <form action="" className="form">
              <div>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Email Or Phone Number"
                />
              </div>
              <div>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Password"
                />
              </div>
            </form>

            <button className="form-button">SignIn</button>
            <div>
            <button onClick={() => login()}>
  Sign in with Google 🚀
</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
