import Movie from "./Movie";

const MovieList = (props) => {
  const {movies} = props
  return (
    <div className="titleList">
      <div className="title">
        <h1>Movies</h1>
        <div className="titles-wrapper">
          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
