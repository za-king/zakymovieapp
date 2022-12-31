import React from "react";
import "./TrendingMovie.css";
import SliderComponent from "./SliderComponent";
const TrendingMovie = ({trendingMovieData}) => {
  
  return (
    <div className="trending-background">
      <div className="trending-container">
        <div className="trending-title">Trending Now</div>
        <div className="trending-slider-setting">
        <SliderComponent movie={trendingMovieData}/>
        </div>
        
      </div>
    </div>
  );
};

export default TrendingMovie;
