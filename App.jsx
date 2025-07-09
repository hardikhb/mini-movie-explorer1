import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import Watchlist from "./components/WatchList";
import MovieModal from "./components/MovieModal";
import "./styles/App.css";

function App() {
  const [results, setResults] = useState([]);
  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem("watchlist");
    return saved ? JSON.parse(saved) : [];
  });
  const [theme, setTheme] = useState("light");
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    fetch(
      `https://www.omdbapi.com/?s=avengers&apikey=${
        import.meta.env.VITE_OMDB_API_KEY
      }&type=movie`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          setResults(data.Search.slice(0, 8));
        }
      });
  }, []);

  const addToWatchlist = (movie) => {
    if (!watchlist.find((m) => m.imdbID === movie.imdbID)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const openMovieModal = async (id) => {
    console.log("Fetching full details for:", id);
    const res = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=${
        import.meta.env.VITE_OMDB_API_KEY
      }`
    );
    const data = await res.json();
    console.log("Fetched data:", data);
    if (data.Response === "True") {
      setSelectedMovie(data);
    }
  };

  const closeMovieModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="app">
      <div className="layout">
        <main className="main-content">
          <button
            onClick={toggleTheme}
            style={{ alignSelf: "flex-end", marginBottom: "1rem" }}
          >
            {theme === "light" ? "🌙 Dark Mode" : "🌞 Light Mode"}
          </button>

          <header className="header">
            <h1>🎬 Mini Movie Explorer</h1>
            <p>
              Search for your favorite movies and build your personal watchlist!
            </p>
          </header>

          <div className="search-section">
            <SearchBar onResults={setResults} />
          </div>

          {results.length > 0 && (
            <>
              <h2 className="section-title">🎯 Suggested Movies</h2>
              <div className="movie-grid">
                {results.map((movie) => (
                  <MovieCard
                    key={movie.imdbID}
                    movie={movie}
                    onAdd={addToWatchlist}
                    onClick={() => openMovieModal(movie.imdbID)}
                    inWatchlist={watchlist.some(
                      (m) => m.imdbID === movie.imdbID
                    )}
                  />
                ))}
              </div>
            </>
          )}
        </main>

        <aside className="watchlist-panel">
          <h2>⭐ Watchlist</h2>
          <Watchlist list={watchlist} setWatchlist={setWatchlist} />
        </aside>
      </div>

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={closeMovieModal} />
      )}
    </div>
  );
}

export default App;
