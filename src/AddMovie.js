import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';

const AddMovie = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [affLink, setAffLink] = useState('');

  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const updateImage = (e) => {
    setImage(e.target.value);
  };

  const updateAffLink = (e) => {
    setAffLink(e.target.value);
  };

  const addMovie = (e) => {
    // Stops page refreshing every time it updates
    e.preventDefault();
    // Makes a copy of the array of objects and lists ALL added movies(movies)
    // setMovies((prevMovies) => [
    //   ...prevMovies,
    //   { name: name, price: price, image: image },
    // ]);
    // Lists recently typed in Information ONLY (No list)
    setMovies(() => [
      { name: name, price: price, image: image, affLink: affLink },
    ]);
  };

  return (
    <form onSubmit={addMovie}>
      Enter Product Title
      <br />
      <input type='text' name={name} onChange={updateName} />
      <br />
      Enter Product Price
      <br />
      <input type='text' price={price} onChange={updatePrice} />
      <br />
      Enter Image Address
      <br />
      <input type='text' image={image} onChange={updateImage} />
      <br />
      Affiliate Link
      <br />
      <input type='text' affLink={image} onChange={updateAffLink} />
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
};

export default AddMovie;
