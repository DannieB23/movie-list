import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';

function Movies({ searchQuery, movies, onMovieDelete, onMovieUpdate }) {

    const displayedMovies = searchQuery
        ? movies.filter(movie =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : movies;

    const handleDeleteMovie = (movieId) => {
        fetch(`http://localhost:8081/movies/${movieId}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                onMovieDelete();
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error.message);
            });
    };

    const handleToggleWatched = (movieId, isWatched) => {
        fetch(`http://localhost:8081/movies/${movieId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ watched: !isWatched })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                onMovieUpdate(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error.message);
            });
    };

    return (
        <ul>
            {displayedMovies.map((movie) => (
                <li key={movie.id}>
                    {movie.title} {movie.watched ? "(Watched)" : "(Not Watched)"}
                    <IconButton onClick={() => handleToggleWatched(movie.id, movie.watched)}>
                        {movie.watched ? <ToggleOnIcon /> : <ToggleOffIcon />}
                    </IconButton>
                    <IconButton onClick={() => handleDeleteMovie(movie.id)}>
                        <DeleteIcon />
                    </IconButton>
                </li>
            ))}
        </ul>
    );
}

export default Movies;
