import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispath } from "react-redux";
import SearchBar from "./SearchBar";
import { BiLogIn } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const navigate = useNavigate();
  //get user is Login Or not form store
  const getLoginInfo = useSelector((state) => state.login.userIsLogin);

  const handleSigin = () => {
    navigate("login");
  };

  return (
    <div className="header-background">
      <div className="header-container">
        <div className="header-left">
          <div className="header-logo">Movie App</div>
          {getLoginInfo && (
            <ul>
              <li className="header-item">
                <a href="/">Home</a>
              </li>
              <li className="header-item">
                <a href="/">Top Rated</a>
              </li>
              <li className="header-item">
                <a href="/">Upcoming</a>
              </li>
            </ul>
          )}
        </div>

        <div className="header-navitem">
          <div className="header-left-left">
            {getLoginInfo ? (
              <div className="header-navitem-login">
                <SearchBar />
                <BiLogIn style={{ color: "white", fontSize: "2rem" }} />
              </div>
            ) : (
              <button
                className="header-signin-button"
                onClick={() => {
                  handleSigin();
                }}
              >
                SignIn
              </button>
            )}
          </div>
          <div className="header-close-button">
            <AiOutlineClose style={{ color: "white", fontSize: "2rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
