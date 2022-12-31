import React from "react";
import "./PopularMovie.css";
const PopularMovie = (props) => {
  const { moviePopular } = props;
  
  return (
    <>
      <div className="popular-background">
        <div className="popular-container">
          <div className="popular-title">Movie Popular</div>
          <div className="popular-grid">
            {moviePopular.map((movieItem , index) => {
              return (
                <>
                  <div className="movieitem-background" key={index}>
                    <img
                      src={
                        process.env.REACT_APP_IMAGEURL + movieItem.backdrop_path

                      }
                      alt="movieimage"
                      width={250}
                    />
                    <div className="movieitem-description">
                      <div className="movie-item-title">{movieItem.title}</div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularMovie;
