import axios from "axios";

const apikey = process.env.REACT_APP_API_KEY;
const accestoken = process.env.REACT_APP_ACCESS_TOKEN;
const apiurl = process.env.REACT_APP_API_URL;
const imageurl = process.env.REACT_APP_IMAGEURL;

//request api
export const getMoviePopular = async (params) => {
  const response = await axios.get(`${apiurl}/movie/popular?api_key=${apikey}`);

  return response.data.results;
};

export const getListMovie = async () => {
  const response = await axios.get(
    `${apiurl}/genre/movie/list?api_key=${apikey}`
  );

  return response.data.genres;
};

export const getTrendingMovie = async () => {
  const response = await axios.get(
    `${apiurl}/trending/all/week?api_key=${apikey}`
  );

  return response.data.results;
};

export const getNewReleaseMovie = async () => {
  const response = await axios.get(
    `${apiurl}/movie/upcoming?api_key=${apikey}`
  );

  return response.data.results;
};

export const getVideosByid = async (props) => {
  const response = await axios.get(
    `${apiurl}/movie/${props}/videos?api_key=${apikey}`
  );

  return response.data.results;
};

export const getSearchApi = async (props) => {
  const { query ,page } = props;
  if (query.length > 0) {
    const response = await axios.get(
      `${apiurl}/search/multi?api_key=${apikey}&query=${query}&page=${page}`
    );
    return response.data;
  }
};

export const getDetailById = async (props) => {
  const { category, id } = props;
  const response = await axios.get(
    `${apiurl}/${category}/${id}?api_key=${apikey}`
  );
  return response.data;
};
