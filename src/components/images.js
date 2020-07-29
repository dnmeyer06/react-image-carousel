import React from 'react'
import StyledImage from './styledComponents/styled-images'

function Image({content, activeImage, index}) {

  return ( activeImage === index ? <StyledImage backgroundImage={content}/> : null)
}

export default Image