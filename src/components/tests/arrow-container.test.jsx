import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import CarouselArrow from '../arrow-container';

afterEach(cleanup);

const arrowClick = jest.fn();

test('<CarouselArrow />', () => {
  const { getByTestId } = render(<CarouselArrow handleClick={arrowClick} direction="left" />);
  const leftArrow = getByTestId('left-arrow');

  expect(leftArrow).toBeTruthy();

  fireEvent.click(leftArrow);
  expect(arrowClick).toHaveBeenCalledTimes(1);
});
