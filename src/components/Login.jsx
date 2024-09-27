import React from "react";
import styled from "styled-components";
import Body from "./Body";
const Login =()=> {
    const handleClick = () => {
        <Body />
    }
    return (
    <Container>
    <div>
   
    <img
      src="http://openweathermap.org/img/wn/10d@2x.png"
      alt="Weather app"
    />
    
    <a href="./Body.jsx">
    <button onClick={handleClick}><span>Show Weather</span></button>
    </a>
    </div>
  </Container>)
}
export default Login;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  gap: 5rem;
  background-image: url('https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?cs=srgb&dl=pexels-pixabay-209831.jpg&fm=jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
    img {
    height: 15vh;
    width: 15vh;
  
  }
    button {
    padding: 0.5rem 2.5rem;
    border-radius: 5rem;
    background-color: black; &:hover { background-color: lightslategrey; } 
    color: white;
    border: none;
    font-size: 1.8rem;
    font-weight:bold;
    cursor: pointer;
    
  }
 
    `
