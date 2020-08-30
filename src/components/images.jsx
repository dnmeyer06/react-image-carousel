import React from 'react';
import PropTypes from 'prop-types';
import StyledImage from './styledComponents/styled-images';

function Image({ content, activeImage, index }) {
  return activeImage === index ? <StyledImage backgroundImage={content} /> : null;
}

Image.propTypes = {
  index: PropTypes.number.isRequired,
  activeImage: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
};

export default Image;
