import { useCallback, useMemo, useState } from "react";

import Header from "./components/Header";
import MovieList from "./components/MovieList";
import { useTheme } from "./context/ThemeContext";
import { movies } from "./datas/movies";

function App() {
  const { darkMode } = useTheme();

  const [favorites, setFavorites] = useState([]);
  const [genre, setGenre] = useState("all");
  const [search, setSearch] = useState("");

  const toggleFavorite = useCallback((id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id],
    );
  }, []);

  const visibleMovies = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return movies.filter((m) => {
      const matchGenre = genre === "all" || m.genre === genre;
      const matchSearch =
        m.title.toLowerCase().includes(keyword) ||
        m.genre.toLowerCase().includes(keyword) ||
        String(m.year).includes(keyword);
      return matchGenre && matchSearch;
    });
  }, [genre, search]);

  const theme = darkMode
    ? { "--bg": "#222", "--text": "#fff", "--border": "#555" }
    : { "--bg": "#f5f5f5", "--text": "#000", "--border": "#ccc" };

  return (
    <div
      style={{
        ...theme,
        minHeight: "100vh",
        background: "var(--bg)",
        color: "var(--text)",
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 16px" }}>
        <Header />

        <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
          <select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="all">All</option>
            <option value="Action">Action</option>
            <option value="Animation">Animation</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Romance">Romance</option>
            <option value="Sci-Fi">Sci-Fi</option>
          </select>

          <input
            type="text"
  value={search}
  placeholder="Tìm tên phim .........."
  onChange={(e) => setSearch(e.target.value)}
  style={{ flex: 1 }}
/>
        </div>

        <p style={{ borderBottom: "1px solid var(--border)", paddingBottom: 12 }}>
          Hiển thị: {visibleMovies.length} / {movies.length} phim | Yêu thích:{" "}
          {favorites.length}
        </p>

        <MovieList
          movies={visibleMovies}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      </div>
    </div>
  );
}

export default App;