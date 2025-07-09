import "./MovieModal.css";

function MovieModal({ movie, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ❌
        </button>
        <div className="modal-header">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : ""}
            alt={movie.Title}
          />
          <div>
            <h2>
              {movie.Title} ({movie.Year})
            </h2>
            <p>
              <strong>Genre:</strong> {movie.Genre}
            </p>
            <p>
              <strong>Rated:</strong> {movie.Rated}
            </p>
            <p>
              <strong>Runtime:</strong> {movie.Runtime}
            </p>
            <p>
              <strong>Released:</strong> {movie.Released}
            </p>
          </div>
        </div>

        <p className="plot">
          <strong>Plot:</strong> {movie.Plot}
        </p>

        <p>
          <strong>Director:</strong> {movie.Director}
        </p>
        <p>
          <strong>Writer:</strong> {movie.Writer}
        </p>
        <p>
          <strong>Actors:</strong> {movie.Actors}
        </p>
        <p>
          <strong>Language:</strong> {movie.Language}
        </p>
        <p>
          <strong>Country:</strong> {movie.Country}
        </p>
        <p>
          <strong>Awards:</strong> {movie.Awards}
        </p>

        <div className="ratings">
          <strong>Ratings:</strong>
          {movie.Ratings &&
            movie.Ratings.map((r, i) => (
              <p key={i}>
                {r.Source}: {r.Value}
              </p>
            ))}
        </div>

        <p>
          <strong>IMDB Rating:</strong> ⭐ {movie.imdbRating}
        </p>
        <p>
          <strong>Box Office:</strong> {movie.BoxOffice}
        </p>
      </div>
    </div>
  );
}

export default MovieModal;
