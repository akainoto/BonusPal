import React from 'react';

// Within the ({}) are the Props needed
const Movie = ({ name, price }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
};

export default Movie;
