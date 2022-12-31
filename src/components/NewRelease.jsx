import React from 'react'
import SliderComponent from "./SliderComponent";

const NewRelease = ({newReleaseMovieData}) => {

  return (
    <div className="trending-background">
      <div className="trending-container">
        <div className="trending-title">New Release</div>
        <div className="trending-slider-setting">
        <SliderComponent movie={newReleaseMovieData}/>
        </div>
        
      </div>
    </div>
  )
}

export default NewRelease