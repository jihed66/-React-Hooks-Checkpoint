const MovieCard = ({ movie }) => (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>⭐ {movie.rating}</p>
    </div>
  );
  
  export default MovieCard;
  