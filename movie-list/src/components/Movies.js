import React, { useState, useEffect } from "react";

function Movies({ searchQuery }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/movies")
            .then((response) => response.json())
            .then((data) => setMovies(data))
            .catch((error) => console.error(error));
    }, []);

    const displayedMovies = searchQuery
        ? movies.filter(movie =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : movies;

    return (
        <ul>
            {displayedMovies.map((movie) => (
                <li key={movie.id} id={movie.id}>
                    {movie.title}
                </li>
            ))}
        </ul>
    );
}

export default Movies