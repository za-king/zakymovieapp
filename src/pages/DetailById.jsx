import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useLocation } from "react-router-dom";
import { getDetailById ,getVideosByid } from "../api/movieApi";
//style css
import "./DetailById.css";
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

    getVideosByid(id).then((res)=>setVideoDataById(res))
  }, [id]);
  console.log(dataVideoById)

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
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailById;
