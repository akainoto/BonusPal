import React from 'react';

// Within the ({}) are the Props needed
const Movie = ({ name, price, image, affLink }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h4>{price}</h4>
      <img src={image} />
      <a href={affLink} target='_blank'>
        <button>Click me</button>
      </a>
    </div>
  );
};

export default Movie;
