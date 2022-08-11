import React from 'react';
import React, { useState, useEffect, useRef, createRef } from 'react';


import './style.css';
var translation = 2000;
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

  /*const handleOnClick = () => {
    
    ref.current.style = "transform: translatey(" + position + "px)" 
    setPosition(parseInt(position) + 2000)
    setHeight(parseInt(height) + 2000)
    ref2.current.style = "height:" + height + "px" 
    console.log(position)
    window.scrollBy({
      top: 2000,
      left: 0,
      behavior: 'smooth'
    }); 
    
  };
*/

const handleOnClick = () => {
  
    var num = Math.floor(Math.random() * 4)

    if(num <= 1){
      ref2.current.className="trailright"
      num == 0 ? translation *= 1 : translation *= -1
      window.scrollBy({
        top: 0,
        left: translation,
        behavior: 'smooth'
      }); 
      ref2.current.style = "width:" + height + "px" 
    }else{
      ref2.current.className="trail"
      num == 2 ? translation *= 1 : translation *= -1
      window.scrollBy({
        top: translation,
        left: 0,
        behavior: 'smooth'
      }); 
      ref2.current.style = "height:" + height + "px" 
    }
    console.log(translation)

    ref.current.style = "transform: translatey(" + position + "px)" 
    setPosition(parseInt(position) + translation)
    setHeight(parseInt(height) + translation)
    
    console.log(position)

    

  }

  

  return (
    <div className='main'> 

      <button 
       ref={ref2}
      className="trail">
      </button> 
      <button 
      ref={ref}
      onClick={() => handleOnClick()}
      className="button">
      Start
      </button>
 
      <button className="testup">
       </button>
       <button className="testdown">
       </button>
       <button className="testleft">
       </button>
       <button className="testright">
       </button>
    </div>
  );
}
