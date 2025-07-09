function Watchlist({ list }) {
  return (
    <div>
      <h3>My Watchlist</h3>
      {list.length === 0 && <p>No movies added yet.</p>}
      {list.map((movie) => (
        <div key={movie.imdbID}>
          <p>
            {movie.Title} ({movie.Year})
          </p>
        </div>
      ))}
    </div>
  );
}

export default Watchlist;
