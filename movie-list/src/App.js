// import logo from './logo.svg';
import './App.css';

const movies = [
  { title: 'Mean Girls' },
  { title: 'Hackers' },
  { title: 'The Grey' },
  { title: 'Sunshine' },
  { title: 'Ex Machina' },
];

function App() {
  return (
    <>
      <h1> Movies: </h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}> {movie.title} </li>
        ))}
      </ul>
    </>
  );
}

export default App;
