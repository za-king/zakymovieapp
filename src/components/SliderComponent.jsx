import React, { useState } from "react";
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
  const [infoDisplay, setInfoDisplay] = useState(false);
  const handleMouse = (id) => {
    setInfoDisplay(true);
  };
  const handleMouseLeave = () => {
    setInfoDisplay(false);
  };

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
                        <BsPlayFill />
                        <BsPlusLg />
                        <AiTwotoneLike />
                        <AiTwotoneDislike />
                      </div>
                      <div className="slider-info">
                        <div>1 hours</div>
                        <div>15555</div>
                        <div>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Vero unde repellat quibusdam dignissimos earum
                          tempore necessitatibus consectetur distinctio iusto{" "}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </Slider>
        <video src="https://www.youtube.com/watch?v=uMQnn8xU7qs&ab_channel=SyedZano"/>
      </div>
    </>
  );
};

export default SliderComponent;
