import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";
import { getSearchApi, getDetailById } from "../api/movieApi";
import { AiOutlineSearch } from "react-icons/ai";
const SearchBar = () => {
  const [searchData, setSearchData] = useState("");
  const [searchResult, setSeacrhResult] = useState();
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchData(value.toLowerCase());
  };

  useEffect(() => {
    getSearchApi({query :searchData ,page : "all"}).then((res) => setSeacrhResult(res));
  }, [searchData]);

  //handle detail movie person TV

  const navigate = useNavigate();
  const handleId = (category, id) => {
    // getDetailById({category: category, id:id})
    navigate(`/detail/${id}`, {
      state: {
        id: id,
        category: category,
      },
    });
  };

  const handleButtonSearch = (query) =>{
    navigate(`/search/${query}`, {
      state: {
        search: query,
      },
    });
  }

  // console.log(searchResult);
  return (
    <div>
      <form action="">
        <div>
          <input
            type="text"
            value={searchData}
            onChange={(e) => {
              handleSearch(e);
            }}
          />
          {searchResult !== undefined && (
            <div className="sugestion-backgroud">
              <div className="sugestion-container">
                {searchResult.results.map((searchItem, index) => {
                  return (
                    <div
                      key={index}
                      className="sugestion-item"
                      onClick={(e) => {
                        handleId(searchItem.media_type, searchItem.id);
                      }}
                    >
                      {searchItem.original_title ||
                        searchItem.original_name ||
                        searchItem.name}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <AiOutlineSearch className="search-icon"  onClick={() =>{handleButtonSearch(searchData)}}/>
      </form>
    </div>
  );
};

export default SearchBar;
