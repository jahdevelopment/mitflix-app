import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MovieList from "./components/MovieList";

function App() {
  const initialState = [
    {
      id: 0,
      title: "Superhero Fight Club",
      image: `https://image.tmdb.org/t/p/w500/zjPn7JUg2tsxlRWp4luK0YVX48Y.jpg`,
      rating: "7.4/10",
      plot: `A former fighter reluctantly returns to the life she abandoned
  in order to help her sister survive the sadistic world of illegal fighting and the maniac who runs it.`,
      liked: true,
    },
    {
      id: 1,
      title: "Superhero Fight Club",
      image: `https://image.tmdb.org/t/p/w500/zjPn7JUg2tsxlRWp4luK0YVX48Y.jpg`,
      rating: "7.4/10",
      plot: `A former fighter reluctantly returns to the life she abandoned
  in order to help her sister survive the sadistic world of illegal fighting and the maniac who runs it.`,
      liked: true,
    },
    {
      id: 2,
      title: "Superhero Fight Club",
      image: `https://image.tmdb.org/t/p/w500/zjPn7JUg2tsxlRWp4luK0YVX48Y.jpg`,
      rating: "7.4/10",
      plot: `A former fighter reluctantly returns to the life she abandoned
  in order to help her sister survive the sadistic world of illegal fighting and the maniac who runs it.`,
      liked: true,
    },
  ];
  const [movies, setMovies] = useState(initialState);
  return (
    <div id="root">
      <Header />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
