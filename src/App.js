import React from 'react';
import Nav from './Nav';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import { MovieProvider } from './MovieContext';

function App() {
  return (
    // Wrapping in MovieProvider allows children
    // access to all MovieContext information.

    <MovieProvider>
      <div className='App'>
        <Nav />

        <div class='row no-gutters'>
          <div class='col-3 no-gutters'>
            <div class='leftframe'>
              <AddMovie />
            </div>
          </div>

          <div class='col-9 no-gutters'>
            <div class='rightframe'>
              <MovieList />
            </div>
          </div>
        </div>
      </div>
    </MovieProvider>
  );
}

export default App;
