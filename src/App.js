import { useState } from "react";
import "./App.css";
import { dict } from "./data";

function App() {
  const [movies, setMovies] = useState([]);

  function onClickHandler(genre) {
    console.log(genre);
    const movieList = dict[genre];
    console.log(movieList);
    setMovies(movieList);
  }

  return (
    <div className="App">
      <h1>Movie Recos</h1>
      <ul className="navbar">
        <li onClick={() => onClickHandler("action")}>Action</li>
        <li onClick={() => onClickHandler("adventure")}>Adventure</li>
        <li onClick={() => onClickHandler("comedy")}>Comedy</li>
        <li onClick={() => onClickHandler("thriller")}>Thriller</li>
        <li onClick={() => onClickHandler("horror")}>Horror</li>
      </ul>

      <ul className="movieList">
        {movies.map(function (movie, index) {
          return (
            <li key={index} className="movie-item">
              <img src={movie.image} alt={movie.name}/>
              <div className="movie-details">
                <h1 className="movie-title">{movie.name}</h1>
                <p className="movie-summary">{movie.summary}</p>
                <p className="movie-rating">Rating: {movie.rating}%</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
