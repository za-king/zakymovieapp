import React from "react";
import "./MovieList.css";
const MovieList = (props) => {
  const { movieList } = props;

  return (
    <div className="movie-background">
      <div className="movielist-container">
        <div className="movielist-title">Movie List Category</div>

        <div className="movielist-grid">
          {movieList.map((listItem ,index) => {
            return (
              <div key={index}>
                <div className="listmovie-item">{listItem.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
