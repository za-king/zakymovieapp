import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { getSearchApi } from "../api/movieApi";
import "./SearchPage.css";
import Pagination from "../components/Pagination";

const SearchPage = () => {
  const { query } = useParams();
  const [searchDataResults, setDataResults] = useState({});
  const [pageCount, setPageCount] = useState(0);

  const getDataVar = async (props) => {
    let res = null;
    res = await getSearchApi({ query: query, page: props });
    setDataResults(res);
    setPageCount(res.total_results);
  };
  useEffect(() => {
    getDataVar();
  }, []);

  const handlePageClick = (data) => {
    let curentPage = data.selected + 1;
    console.log(curentPage);
    getDataVar(curentPage);
  };

  return (
    <Layout>
      <div className="searchpage-background">
        <div className="searchpage-container">
          <div className="searchpage-title">Search Results</div>
          <div className="searchpage-grid">
            {searchDataResults.results?.map((movieItem, index) => {
              return (
                <>
                  <div className="background" key={index}>
                    <div className="box-image">
                      <img
                        src={
                          process.env.REACT_APP_IMAGEURL +
                            movieItem.backdrop_path ||
                          process.env.REACT_APP_IMAGEURL +
                            movieItem.profile_path
                        }
                        alt="movieimage"
                      />
                    </div>
                    <div className="description">
                      <div className="title">{movieItem.title}</div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="pagination">
          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
