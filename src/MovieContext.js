import React, { useState, createContext } from 'react';

// Can use in other components
export const MovieContext = createContext();

// One time thing to provide information
export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: 'Enter Title',
      price: 'Enter Price',
      image: 'Product URL',
      affLink: '',
      id: 23124,
    },
  ]);

  // Renders all children using 'createContext'
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
