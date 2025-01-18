import React, { useState } from 'react';
import './Carousel.css';
import imagem from '../../assets/netflix-images/AAAABU8qTTl_U-eMQzxsvMy_JcIgBM6vntKNM3orYzsFbbC28czD7ysVpf5YWwzqK3ggasZ09lw0B1fTicq0W11Rdk5igeXtdmoH6YbU82vG-2frqy5fP1UyVU1bzAjJLURnlgITXSsMkM7e.webp'
import imagem2 from '../../assets/netflix-images/AAAABbCD9iJVOpp2ZR3ASz1L8hqJ1HRgtF9iGR5LGNiR4SUBW7xDO7lFjZBzOwoLyLiq9MFzgIqhtGp8obV9nvaWAwgomhdB9_4scdc8fCgN4lqB2xRCsJkjBzYaCAfaUzPqZ-gl1ydoDIc6.webp'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Defina as imagens para o carrossel
  const [images, setImages] = useState([
    imagem2,
    imagem2,
    imagem2,
    imagem2,
    imagem2,
    imagem,
    imagem,
    imagem,
    imagem,
    imagem
  ]);

  const nextSlide = () => {
    
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0); // Vai para o início quando chega ao final
    } else {
      setCurrentIndex(1);
    }

    orderList();
  };

  const orderList = () => {
    
    // Pega os últimos 5 elementos e coloca na frente
    const lastFive = images.slice(-5); // Pega os últimos 5 itens
    const rest = images.slice(0, images.length - 5); // Pega o restante dos itens

    // Junta os dois arrays, com os últimos 5 itens no começo
    lastFive.concat(rest);

    setImages(lastFive);
  };

  const divImages = images.map((image, i) => {
    return <img src={image} alt={`imagem ${i + 1}`} className="carousel-image" />
})

  return (
    <div className='carousel'>
    <div className="carousel-container">
      <div className="carousel-slide">
        {divImages}
      </div>
        <button className="carousel-image" onClick={nextSlide}>❯</button>
        </div>

    </div>
  );
};

export default Carousel;
