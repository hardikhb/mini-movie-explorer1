function MovieCard({ movie, onAdd, onClick, inWatchlist }) {
  return (
    <div className="movie-card" onClick={onClick}>
      <img src={movie.Poster !== "N/A" ? movie.Poster : ""} alt={movie.Title} />
      <div>
        <h4>{movie.Title}</h4>
        <p>{movie.Year}</p>

        {!inWatchlist && (
          <button
            onClick={(e) => {
              e.stopPropagation();

              onAdd(movie);
            }}
          >
            ➕ Add to Watchlist
          </button>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
