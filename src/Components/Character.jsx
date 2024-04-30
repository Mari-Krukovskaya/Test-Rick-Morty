import React, { useState } from "react";
import styled from "styled-components";

const ArticleCard = styled.article`
  background: rgb(60, 62, 68);
.title_card {
  font-size: 20px;
  font-weight: bold;
}
  `;
const Character = (props) => {
  const [displayToggle, setDisplayToggle] = useState(false);
  
const clickCard = (event) => {
    event.preventDefault();
    setDisplayToggle(!displayToggle);
}
  
return (
    <ArticleCard className='card'>
   <button 
    onClick={clickCard}>
    <img src={props.image} alt={props.name} />
    <p className="title_card">{props.name}</p>
    </button>
    { displayToggle && (<>
    <p>Gender: {props.gender}</p>
    <p>Name: {props.name}</p>
    <p>Location: {props.location.name}</p>
    <p>Origin: {props.origin.name}</p>
    <p>Species: {props.species}</p>
    <p>Status: {props.status}</p>
    <p>Type: {props.type}</p>
    </>)}
    </ArticleCard>
)
};

export default Character;