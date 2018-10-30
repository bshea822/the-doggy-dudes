import React from 'react';

const SlideTile = (props) => {
  return(
    <li className="orbit-slide">
      <figure className="orbit-figure">
        <img className="orbit-image" src={props.image} alt="image alt text" />
      </figure>
    </li>
  );
};
 export default SlideTile;
