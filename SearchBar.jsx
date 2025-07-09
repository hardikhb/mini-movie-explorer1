import { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";

function SearchBar({ onResults }) {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (!debouncedQuery) return;

    const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

    fetch(
      `https://www.omdbapi.com/?s=${debouncedQuery}&apikey=${API_KEY}&type=movie`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          onResults(data.Search.slice(0, 10));
        } else {
          onResults([]);
        }
      })
      .catch((err) => {
        console.error("API error:", err);
        onResults([]);
      });
  }, [debouncedQuery, onResults]);

  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default SearchBar;
