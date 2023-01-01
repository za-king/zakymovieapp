import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./sliderComponent.css";

import { BsPlayFill, BsPlusLg } from "react-icons/bs";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";

const SliderComponent = ({ movie }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,

    variableWidth: true,
  };

  const navigate= useNavigate()
  const [infoDisplay, setInfoDisplay] = useState(false);
  const handleMouse = (id) => {
    setInfoDisplay(true);
  };
  const handleMouseLeave = () => {
    setInfoDisplay(false);
  };

  const handleId =(category , id) =>{
    // getDetailById({category: category, id:id})
    navigate(`/detail/${id}`, {
      state: {
        id: id,
        category:category
      }
    });
  }

  return (
    <>
      <div className="slide-background">
        <Slider {...settings}>
          {movie.map((movieItem) => {
            return (
              <div
                className="slider-image"
                onMouseEnter={() => {
                  handleMouse(movieItem.id);
                }}
                onMouseLeave={() => {
                  handleMouseLeave();
                }}
                key={movieItem.id}
              >
                <img
                  src={process.env.REACT_APP_IMAGEURL + movieItem.backdrop_path}
                  alt="movieimage"
                />
                {infoDisplay && (
                  <>
                    <div className="slider-description">
                      <div className="slider icon">
                        <BsPlayFill className="icon" onClick={(e) =>{handleId(movieItem.media_type ,movieItem.id)}} />
                        <BsPlusLg className="icon" />
                        <AiTwotoneLike className="icon" />
                        <AiTwotoneDislike className="icon" />
                      </div>
                      <div className="slider-info">
                        
                          <div className="time-view">1 hours || 2432</div>
    
                        
                        <div>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Vero unde repellat quibusdam dignissimos earum
                          tempore 
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </Slider>
        <video src="https://www.youtube.com/watch?v=uMQnn8xU7qs&ab_channel=SyedZano" />
      </div>
    </>
  );
};

export default SliderComponent;
