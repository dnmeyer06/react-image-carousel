import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';
import * as serviceWorker from './serviceWorker';

const images = [
  'https://i.ibb.co/FzmKjSn/DSCF9450.jpg',
  'https://i.ibb.co/NC4R6Fv/DSCF9615.jpg',
  'https://i.ibb.co/cy04yG0/DSCF9661.jpg',
  'https://i.ibb.co/7YqyKV2/DSCF9670.jpg',
  'https://i.ibb.co/VLS5WL6/DSCF9660.jpg',
  'https://i.ibb.co/QcCwrSv/DSCF9470.jpg',
];

ReactDOM.render(
  <React.StrictMode>
    <Carousel slideImages={images} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default images;
