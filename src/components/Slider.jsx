import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/slider.css";
import raraTrailImage1 from '../assets/images/slider-destination/rara trail.jpg';
import Lomanthang from '../assets/images/slider-destination/lomanthang-1.jpg';
import upperMustang from '../assets/images/slider-destination/upper-mustang.jpg';
import village from '../assets/images/slider-destination/village.jpg';
import bara from '../assets/images/slider-destination/Bara-1.jpg';
import manang from '../assets/images/slider-destination/manang.png';
import dolpo from '../assets/images/slider-destination/upper dolpo.jpg';



const Slider = () => {
  const sliderRef = useRef();
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const navigate = useNavigate(); 


  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleClick = () => {
    navigate("/destinations/Rara"); // Ensure this matches your Route path
  };
  return (
    <div
      className="slider-container"
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {/* Add images inside slider boxes */}
    <div className="slider-box" onClick={handleClick} style={{ cursor: "pointer" }}>
      <div className="text">Rara Lake, Mugu</div> 
        <img src={raraTrailImage1} alt="Image 1" />
    </div>

    <div className="slider-box">
        <div className="text">Lomanthang, Mustang</div> 
        <img src={Lomanthang} alt="Image 2" />
    </div>
      <div className="slider-box">
      <div className="text">Lomanthang, Mustang</div> 
        <img src={village} alt="Image 3" />
      </div>
      <div className="slider-box">
      <div className="text">Manang, Mustang</div> 
        <img src={manang} alt="Image 4" />
      </div>
      <div className="slider-box">
      <div className="text">Upper Dolpo, Dolpa</div> 
        <img src={dolpo} alt="Image 5" />
      </div>
      <div className="slider-box">
      <div className="text">Mainali Farm House, Bara</div> 
        <img src={bara} alt="Image 6" />
      </div>
      <div className="slider-box">
      <div className="text">Upper Mustang, Mustang</div> 

        <img src={upperMustang} alt="Image 7" />
      </div>
    </div>
  );
};

export default Slider;
