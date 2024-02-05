import React, { useState } from "react";
import styled from "styled-components";

const ArticleCard = styled.article`
  background: rgb(60, 62, 68);
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
    <img src={props.result.image} alt={props.result.name} />
    </button>
    { displayToggle && (<>
    <p>Gender: {props.result.gender}</p>
    <p>Name: {props.result.name}</p>
    <p>Location: {props.result.location.name}</p>
    <p>Origin: {props.result.origin.name}</p>
    <p>Species: {props.result.species}</p>
    <p>Status: {props.result.status}</p>
    <p>Type: {props.result.type}</p>
    </>)}
    </ArticleCard>
)
};

export default Character;