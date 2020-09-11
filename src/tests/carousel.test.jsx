import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Carousel from '../carousel';

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

test('<Carousel />', () => {
  const images = ['1', '2'];
  const { getByTestId } = render(<Carousel slideImages={images} />);

  expect(console.error).not.toHaveBeenCalled();
  expect(getByTestId('carousel-container')).toBeTruthy();
});
