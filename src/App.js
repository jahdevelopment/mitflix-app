import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  const searchMoviesHanlder = (query) => {
    const apiKey = `32fba61adda7634622096950aa45f404`;
    fetch(
      `https://api.themoviedb.org/3/search/movie/?api_key=${apiKey}&query=${query}`
      )
    .then(response => response.json())
    .then((movies) => {
      return movies.results.map((movie) => {
        return {
          id: movie.id,
          title: movie.title,
          image: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
          rating: movie.vote_average,
          plot: movie.overview,
          liked: false,
        };
      });
    })
    .then((movies) => setMovies(movies));
  };

  return (
    <div id="root">
      <Header searchMovies={searchMoviesHanlder} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
