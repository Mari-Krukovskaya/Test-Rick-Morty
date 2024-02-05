import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import styled from 'styled-components';
import rick_morty from './image/rick_morty.png';
import Character from './Components/Character';

const Header = styled.header`
position: relative;
display: flex;
justify-content: end;
align-items: baseline;
.search {
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 2;
 }
 p {
  font-size: 25px;
  padding-right: 1rem;
 }

 span {
  font-weight: bold;
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color: transparent;
 }

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
const [url, setUrl] = useState("https://rickandmortyapi.com/api/character/?name=");
const [info, setInfo] = useState({});
const [results, setResults] = useState([]);
const [search, setSearch] = useState("");

useEffect(() => {
axios.get(`${url}${search}`)
  .then((result) => {
console.log(result);
setInfo(result.data.info);
setResults(result.data.results);
  }).catch((error) => {
    console.log(error);
  })
}, [search]);

useEffect(() => {
  console.log('results', results)
},[url, info, results, search])

const changeSearch = (e) => {
  setSearch(e.target.value);
}
  return (
    <>
    <Header>
      <div className='search'>
      <p><span>Search</span></p>
      <input onChange={changeSearch} value={search} type="text" placeholder='search'/>
      </div>
      <div className="hero-image">
      <h1>The Rick & Morty</h1>
      <img src={rick_morty} alt='Rick and Morty' />
      </div>
    </Header>
    <CardDiv>
   <main>
    <section className='characters'>
      {results.map((result, index) => (
       <Character key={index} result={result}/>
    ))}
    </section>
    </main>
    </CardDiv>
    </>
  );
}

export default App;
