import React, { useState, useEffect, useRef } from 'react'

import CarouselContainer from './components/styledComponents/styled-carousel-container';
import CarouselArrow from './components/arrow-container';
import Image from './components/images';
import './components/styledComponents/body.css'

const Carousel = props => {
  const {images} = props
  const [state, setState] = useState({
    activeImage: 0
  })
  const { activeImage } = state

  const autoPlayRef = useRef()

  useEffect(() => {
    autoPlayRef.current = nextImage
    console.log('render!')
  })

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }
    console.log('render')

    const interval = setInterval(play, 5000)
    return () => clearInterval(interval);
  }, [])

  const nextImage = () =>
    setState({
      ...state,
      activeImage: activeImage === images.length - 1 ? 0 : activeImage + 1
    })

  const prevImage = () =>
    setState({
      ...state,
      activeImage: activeImage === 0 ? images.length - 1 : activeImage - 1
    })

  return (
    <CarouselContainer>
      <CarouselArrow handleClick={prevImage} direction='left'></CarouselArrow>
        {props.images.map((images, index) => (
          <Image key={index} content={images} activeImage={activeImage} index={index}/>
          ))}
      <CarouselArrow handleClick={nextImage} direction='right'></CarouselArrow>
    </CarouselContainer>
  );
}

export default Carousel;
