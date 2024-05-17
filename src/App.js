import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './App.css';
import styled from 'styled-components';
import rick_morty from './image/rick_morty.png';
import Character from './Components/Character';
import Filters from './Components/Filters/Filters';
import Pagination from './Components/Pagination/Pagination';

const Header = styled.header`
 .hero-image {
  position: absolute;

 }
 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
 }
 h1 {
  position: absolute;
  top: -79px;
  left: 250px;
  font-weight: 900;
  font-size: 6.75rem;
  z-index: 1;
  -webkit-text-stroke: 2px #94bc83;
  -webkit-text-fill-color: transparent;
 }
`;

const CardDiv = styled.div`
position: relative;
display: flex;
top: 534px;
main {
  position: absolute;
  background-color: #202329;
  color: white;
}
.characters {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  padding: 10px

}
img {
width: 100%;
border-radius: 1rem;
}
`;

function App() {
  const [pageNumber, updateNumber] = useState(1);
  const [results, setResults] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchSpecies, setSearchSpecies] = useState("");
  const [searchType, setSearchType] = useState("");
  const [filteredStatus, setFilteredStatus] = useState("all");
  const [filteredGender, setFilteredGender] = useState("all");
  const [isError, setIsError] = useState(false);
  const [isNoResult, setIsNoResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
        if (
          searchName ||
          searchSpecies ||
          searchType ||
          filteredGender ||
          filteredStatus
        ) {
          setIsLoading(true);
          const urlName = searchName !== '' ? `&name=${searchName.toLowerCase()}` : '';
          const urlSpecies = searchSpecies !== '' ? `&species=${searchSpecies.toLowerCase()}` : '';
          const urlType = searchType !== '' ? `&type=${searchType.toLowerCase()}` : '';
          const urlStatus = filteredStatus && filteredStatus !== 'all' ? `&status=${filteredStatus}` : '';
          const urlGender = filteredGender && filteredGender !== 'all' ? `&gender=${filteredGender}` : '';

          const filteredString = `https://rickandmortyapi.com/api/character/?page=${pageNumber}${urlName}${urlSpecies}${urlType}${urlStatus}${urlGender}`;

          try {
          const response = await axios.get(`${filteredString}`);
          if (response.data) {
              setResults(response.data.results);
              setInfo(response.data.info);
            } else {
              setIsNoResult(true);
            }
          
          } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false)
      }
    }
  };
    fetchData();
  }, [searchName, searchSpecies, searchType, filteredStatus, filteredGender, pageNumber]);

useEffect(() => {
  if (!isError) {
    if (
      !results.length &&
      (searchName ||
        searchSpecies ||
        searchType ||
        filteredStatus ||
        filteredGender)
    ) {
      setIsNoResult(true);
    } else {
      setIsNoResult(false);
    }
  }

},[results, searchName, searchSpecies, searchType, filteredGender, filteredStatus, isError])

  const handleSearchClick = (searchData) => {
    setIsError(false);
    setSearchName(searchData.searchName);
    setSearchSpecies(searchData.searchSpecies);
    setSearchType(searchData.searchType);
    setFilteredStatus(searchData.filteredStatus);
    setFilteredGender(searchData.filteredGender);

  };

  useEffect(() => {
  }, [results, searchName, searchSpecies, searchType, filteredStatus, filteredGender, isError, isNoResult, isLoading]);

  return (
    <>
      <Header>
        <Filters handleSearchClick={handleSearchClick} />
        <div className="hero-image">
          <h1>The Rick & Morty</h1>
          <img src={rick_morty} alt='Rick and Morty' />
        </div>
      </Header>
      <CardDiv>
        <main>
          <section className="characters">
            {results &&
              results.map((item) => (
                <Character
                  key={item.id}
                  image={item.image}
                  gender={item.gender}
                  name={item.name}
                  location={item.location.name}
                  origin={item.origin.name}
                  species={item.species}
                  status={item.status}
                  type={item.type}
                />
              ))}
          </section>
        </main>
        <Pagination 
        info={info}
        pageNumber={pageNumber}
        updateNumber={updateNumber}
        />
      </CardDiv>
    </>
  );
}

export default App;
