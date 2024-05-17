import React, { useState } from "react";
import styled from "styled-components";
import '../Filters/Filters_btn.css';

const Search = styled.div`
position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
.search_form {
  position: relative;
  top: 95px;
  right: 0;
  background-color: #0c0c0c1c;
  padding: 20px;
  box-sizing: border-box;
  .search_span {
  color: white;
  font-size: 18px;
  padding: 10px 10px;
  }
  .search_input {
    border: 2px solid gray;
    outline: none;
    background-color: #222222;
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
  }
  .search_input:focus {
    border-bottom: 2px solid #8b8b8b;
    background-color: #222222;
  }

  .search_input::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.11;
    color: #8b8b8b;
  }
  .search_input:focus::placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
.search-selects__label-form {
  padding: 60px 30px 35px 0;
  display: flex;
  justify-content: center;
}
.search_select {

}
.search_btn {
  cursor: pointer;
  display: flex;
  position: relative;
  top: 6px;
  left: 330px;
  border-radius: 20px;
  color: #ffffff;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.64;
  text-align: center;
  border: none;
  margin: 0 0 0;
  padding: 8px 35px;
}
.search_btn:hover {
  opacity: 0.8;
  cursor: pointer;
}
}

`;
const Filters = ({ handleSearchClick }) => {
  const [searchName, setSearchName] = useState("");
  const [searchSpecies, setSearchSpecies] = useState("");
  const [searchType, setSearchType] = useState("");
  const [filteredStatus, setFilteredStatus] = useState("all");
  const [filteredGender, setFilteredGender] = useState("all");

const handleSearchName = (event) => {
  setSearchName(event.target.value);
};

const handleSearchSpecies = (event) => {
  setSearchSpecies(event.target.value);
};

const handleSearchType = (event) => {
  setSearchType(event.target.value);
};

const handleSearchStatus = (event) => {
  setFilteredStatus(event.target.value);
};

const handleSearchGender = (event) => {
  setFilteredGender(event.target.value);
};

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const filters = {
        searchName,
        searchSpecies,
        searchType,
        filteredStatus,
        filteredGender
    };
    handleSearchClick(filters);
  };

  return (
<>
<Search className="search">
<form onSubmit={handleSearchSubmit} className="search_form">
  <label htmlFor="search_name" className="search_label">
    <span className="search_span">name:</span>
    <input 
    className="search_input"
    type="text"
    value={searchName}
    onChange={handleSearchName}
    placeholder="name"
    />
    </label>
    <label form="search_species" className="search_label">
      <span className="search_span">species:</span>
    <input 
    className="search_input"
    type="text"
    value={searchSpecies}
    onChange={handleSearchSpecies}
    placeholder="species"
    />
    </label>
    <label form="search_type" className="search_label">
      <span className="search_span">type:</span>
    <input 
    className="search_input"
    type="text"
    value={searchType}
    onChange={handleSearchType}
    placeholder="type"
    />
    </label>

    <div className="search-selects__label-form">
    <label className="search_label">
      <span className="search_span">status:</span>
    <select 
    className="search_select"
    value={filteredStatus}
    onChange={handleSearchStatus}
    >
      <option value="all">all</option>
      <option value="alive">alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select>
    </label>
    <label className="search_label">
      <span className="search_span">gender:</span>
    <select
    className="search_select"
    value={filteredGender}
    onChange={handleSearchGender}
    >
      <option value="all">all</option>
      <option value="female">Female</option>
      <option value="male">Male</option>
      <option value="genderless">Genderless</option>
      <option value="unknown">Unknown</option>
    </select>
    </label>
    </div>
    <button className="btn-76 search_btn" type="submit">
  Search
  <span className="top"></span>
  <span className="right"></span>
  <span className="bottom"></span>
  <span className="left"></span>
</button>
    {/* <button className="search_btn" type="submit">Search</button> */}
</form>
</Search>
</>
  );
};

export default Filters;