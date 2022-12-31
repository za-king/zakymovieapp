import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-background"></div>
      <div className="hero-container">
        <div className="hero-main-quote">
          Unlimited movies, TV shows, and more.
        </div>
        <div className="hero-secondary-quote">
          Watch anywhere. Cancel anytime.
        </div>

        <button>Get Started</button>
      </div>
    </>
  );
};

export default Hero;
