// import logo from './logo.svg';
//import './App.css';
import Movies from './components/Movies'
import PrimarySearchAppBar from './components/SearchBar'
import React, { useState, useEffect } from 'react';


function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    fetch("http://localhost:8081/movies")
      .then((response) => response.json())
      .then((data) => {
        const userAddedMovies = data.filter(movie => movie.userAdded);
        setMovies(userAddedMovies);
      })
      .catch((error) => console.error(error));
  }


  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <PrimarySearchAppBar onSearch={setSearchQuery} onAddMovie={fetchMovies} />
      <Movies searchQuery={searchQuery} movies={movies} onMovieDelete={fetchMovies} />
    </div>
  );
}

export default App;