import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import "./Dashboard.css";
import TrendingMovie from "../components/TrendingMovie";
import NewRelease from "../components/NewRelease";
import { BsPlayFill } from "react-icons/bs";
import { BiInfoCircle } from "react-icons/bi";
import { getTrendingMovie, getNewReleaseMovie } from "../api/movieApi";


function Dashboard() {
  const [trendingMovieData, setTrendingMovieData] = useState([]);
  const [newReleaseMovieData, setNewReleaseMovieData] = useState([]);
  useEffect(() => {
    getTrendingMovie().then((res) => {
      setTrendingMovieData(res);
    });
    getNewReleaseMovie().then((res) => {
      setNewReleaseMovieData(res);
    });
  }, []);

  return (
    <Layout>
      <div className="dashboard-background"></div>
      <div className="dashboard-container">
        <div className="dashboard-title">Captain America</div>
        <div className="dashboard-button">
          <button className="dashboard-play-button">
            <BsPlayFill style={{ fontSize: "1.5rem" }} />
            Play
          </button>
          <button className="dashboard-more-button">
            <BiInfoCircle style={{ fontSize: "1.5rem" }} />
            More Info
          </button>
        </div>
      </div>
      
      <TrendingMovie trendingMovieData={trendingMovieData} />
      <NewRelease newReleaseMovieData={newReleaseMovieData} />
    </Layout>
  );
}

export default Dashboard;
