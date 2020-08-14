import React from 'react';

const NoGifs = props => (
  <li className='no-gifs'>
    <img src="./images/sad.svg" className="sad-icon"></img>
    <h3>Sorry, no GIFs match your search.</h3>
  </li>
);

export default NoGifs;