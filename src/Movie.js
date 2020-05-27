import React from 'react';

// Within the ({}) are the Props needed
const Movie = ({ name, price, image }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h4>{price}</h4>
      <img src={image} />
    </div>
  );
};

export default Movie;
