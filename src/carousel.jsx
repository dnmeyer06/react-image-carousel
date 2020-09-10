import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import CarouselContainer from './components/styledComponents/styled-carousel-container';
import CarouselArrow from './components/arrow-container';
import Image from './components/images';
import './components/styledComponents/body.css';

const Carousel = ({ slideImages }) => {
  // State Variables
  const [state, setState] = useState({
    activeImage: 0,
  });
  const { activeImage } = state;

  // Image shift methods
  const nextImage = () =>
    setState({
      ...state,
      activeImage: activeImage === slideImages.length - 1 ? 0 : activeImage + 1,
    });

  const prevImage = () =>
    setState({
      ...state,
      activeImage: activeImage === 0 ? slideImages.length - 1 : activeImage - 1,
    });

  // Autoplay Hooks
  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextImage;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const interval = setInterval(play, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <CarouselContainer>
      <CarouselArrow handleClick={prevImage} direction="left" />
      {slideImages.map((images, index) => (
        <Image key={images} content={images} activeImage={activeImage} index={index} />
      ))}
      <CarouselArrow handleClick={nextImage} direction="right" />
    </CarouselContainer>
  );
};

Carousel.propTypes = {
  slideImages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
