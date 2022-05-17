const Movie = (props) => {
  const { id, title, image, rating, plot, liked } =props.movie;
  return (
    <div className="movie">
              <img
                src={image}
                alt={`${title} Movie poster`} />
              <div className="overlay">
                <div className="title">{title}</div>
                <div className="rating">{rating}</div>
                <div className="plot">{plot}</div>
                <div data-toggled="true" className="listToggle">
                  <div>
                    <i className="far fa-heart"></i><i className="fas fa-heart"></i>
                  </div>
                </div>
              </div>
            </div>
  );
};

export default Movie;
