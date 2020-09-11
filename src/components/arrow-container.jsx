import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ArrowContainer from './styledComponents/styled-arrow-container';

const CarouselArrow = ({ handleClick, direction }) => (
  <ArrowContainer onClick={handleClick} direction={direction} data-testid={`${direction}-arrow`}>
    <div>
      <FontAwesomeIcon icon={direction === 'left' ? faChevronLeft : faChevronRight} />
      <span className="fa fa-2x" />
    </div>
  </ArrowContainer>
);

CarouselArrow.propTypes = {
  handleClick: PropTypes.func.isRequired,
  direction: PropTypes.string.isRequired,
};

export default CarouselArrow;
