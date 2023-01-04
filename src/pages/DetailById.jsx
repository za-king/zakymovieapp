import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useLocation } from "react-router-dom";
import { getDetailById, getVideosByid } from "../api/movieApi";
//style css
import "./DetailById.css";

import ReactPlayer from "react-player/youtube";

const DetailById = () => {
  const [dataById, setDataById] = useState({});
  const [dataVideoById, setVideoDataById] = useState([]);
  const location = useLocation();

  let id = location.state.id;
  let category = location.state.category;

  useEffect(() => {
    getDetailById({ category: category, id: id }).then((res) =>
      setDataById(res)
    );

    getVideosByid(id).then((res) => setVideoDataById(res));
  }, [id]);
  // console.log(dataById)
  const test = dataVideoById.filter((video) =>
    video.name.includes("Official Trailer")
  );
  console.log(dataById);
  return (
    <Layout>
      <div className="detailbyid-background">
        <div className="detailbyid-container">
          <img
            src={process.env.REACT_APP_IMAGEURL + dataById.poster_path}
            alt=""
          />
          <div className="detailbyid-detail">
            <div className="detailbyid-detail container">
              <div className="title"> {dataById.original_title}</div>
              <div>
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=` + test[0]?.key}
                  playing
                  controls
                />
              </div>
              <div className="detail-info ">
                <div>
                  <div>Country</div>
                  <div>Release</div>
                  <div>Production</div>
                  <div>Rating</div>
                  <div>Genres</div>
                </div>

                <div>
                  <div>
                    {dataById.production_countries?.map((country) => {
                      return country.name + ",";
                    })}
                  </div>
                  <div>{dataById?.release_date}</div>
                  <div>
                    {dataById.production_companies?.map((company) => {
                      return company.name + ",";
                    })}
                  </div>
                  <div>{dataById?.vote_average}  / 10 from {dataById?.vote_count }</div>
                  <div>
                    {dataById.genres?.map((genre) => {
                      return genre.name + ",";
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailById;
