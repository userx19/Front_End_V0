import React, { useState,useEffect } from 'react';
import './myAppCarousel.css';



const Carousel = () => {
 // const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);

  /*useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://160.178.156.96:449/Voitures');
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);*/

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex => currentIndex === 6 ? 1 : currentIndex + 1);
    }, 1400);
    return () => clearInterval(interval);
  });
  
  return (
    <div className="carousel">
        <div className="carousel-container">
          <img src={require(`../../images/carnumber${[currentIndex]}.png`)} alt={[currentIndex].value} />
        </div>
    </div>
  );
};

export default Carousel;
