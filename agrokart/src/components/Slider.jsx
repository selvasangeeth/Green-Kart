import React, { useState, useEffect } from 'react';
import agri from "../assests/agri1.jpg";
import agrii from "../assests/agri2.jpeg";
import agriiii from "../assests/agri3.webp";


const Slider = () => {
  const images = [agri, agrii, agriiii];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return ( 
    <div > 
      {images.map((image, i) => (
        <img key={i} src={image}  alt="images" style={{ display: i === index ? 'block' : 'none',height:'500px', width:'100%'}} />
      ))}
    </div>
  );
};

export default Slider;

