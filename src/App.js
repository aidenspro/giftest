import React from 'react';
import React, { useState, useEffect, useRef, createRef } from 'react';


import './style.css';

export default function App() {
  const oki = [
    <img src={'https://media.giphy.com/media/CFn3vsbR2YWVNOFjpH/giphy.gif'} alt="loading..." />,
    <img src={'https://media.giphy.com/media/NVVhH9vZQOVcvGDABW/giphy.gif'} alt="loading..." />,
    <img src={'https://media.giphy.com/media/v80jyfDcrwfQ6CIjjW/giphy.gif'} alt="loading..." />,
    <img src={'https://media.giphy.com/media/ZSr1CoREh0ZBuE9Lw0/giphy.gif'} alt="loading..." />,
    <img src={'https://media.giphy.com/media/EfHHeGBCvD5Gwm0yO4/giphy.gif'} alt="loading..." />,
    <img src={'https://media.giphy.com/media/cGb5nrKnlpqkCUhW2h/giphy.gif'} alt="loading..." />,
    <img src={'https://media.giphy.com/media/V6UKpooPlwX06wDdsG/giphy.gif'} alt="loading..." />,
    <img src={'https://media.giphy.com/media/uc9ay5QHb3tBOBtfkm/giphy.gif'} alt="loading..." />,
    <img src={'https://media.giphy.com/media/LVHIOWTZOE0f3hzygh/giphy.gif'} alt="loading..." />,
    <img src={'https://media.giphy.com/media/y2JQ5rxfsX4S6dJe3e/giphy.gif'} alt="loading..." />,
    <img src={'https://media.giphy.com/media/v2hLEwIzxOBkluebmT/giphy.gif'} alt="loading..." />,
    <img src={'https://media.giphy.com/media/VhepGm3ABdK2Yy0dj4/giphy.gif'} alt="loading..." />,
  ]
  const ref = useRef();
  const ref2 = useRef();
  const [position, setPosition] = useState([2000]);
  const [height, setHeight] = useState([2000]);
  const handleOnClick = () => {
    ref.current.style = "transform: translatey(" + position + "px)" 
    setPosition(parseInt(position) + 2000)
    setHeight(parseInt(height) + 2000)
    ref2.current.style = "height:" + height + "px" 
    console.log(position)
    console.log("height:" + height + "px" )
    ref.current.scrollIntoView({ behavior: 'smooth' })
  };
  
  return (
    <div> 

      <button 
       ref={ref2}
      className="trail"></button> 
      <button 
      ref={ref}
      onClick={() => handleOnClick()}
      className="button">
      Start
      </button>
 
    </div>
  );
}
