import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import ArrowContainer from './styledComponents/styled-arrow-container'

const CarouselLeftArrow = ({ handleClick, direction }) => (
  <ArrowContainer
    onClick={handleClick}
    direction={direction}
  >
    <div>
      <FontAwesomeIcon icon={direction === 'left' ? faChevronLeft : faChevronRight} />
        <span className="fa fa-2x" />
    </div>
  </ArrowContainer>
);

export default CarouselLeftArrow;