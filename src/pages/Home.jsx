import React from "react";
import { getMoviePopular,getListMovie } from "../api/movieApi";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import MovieList from "../components/MovieList";
import PopularMovie from "../components/PopularMovie";
function Home() {
  const [moviePopular, setMoviePopular] = useState([]);
  const [movieList, setMovieList] =useState([])

  useEffect(() => { 
    getMoviePopular().then((result) => setMoviePopular(result));
    getListMovie().then((result) => setMovieList(result));
  }, []);

  

  return (
    <Layout>
      <Hero />
      <MovieList movieList={movieList}/>
      <PopularMovie moviePopular={moviePopular} />
    </Layout>
  );
}

export default Home;
