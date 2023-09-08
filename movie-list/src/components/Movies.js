import React, { useState, useEffect } from "react";

function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/movies")
            .then((response) => response.json())
            .then((data) => setMovies(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <ul>
            {console.log(movies)}
            {movies.map((movie) => (
                <li key={movie.id} id={movie.id}>
                    {movie.title}
                </li>
            ))}
        </ul>
    );
}

export default Movies;
