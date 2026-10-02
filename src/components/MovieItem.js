import { memo } from "react";

function MovieItem({ movie, isFavorite, onToggleFavorite }) {
  const handleDetail = () => {
    alert(
      `----Movie Details-----\n` +
      `Title: ${movie.title}\n` +
        `Genre: ${movie.genre}\n` +
        `Year: ${movie.year}\n` +
        `Rating: ${movie.rating}\n` +
        `Director: ${movie.director}\n` +
        `Duration: ${movie.duration}\n` +
        `Description: ${movie.description}`,
    );
  };

  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px 0",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <input
        type="checkbox"
        checked={isFavorite}
        onChange={() => onToggleFavorite(movie.id)}
        title="Yêu thích"
      />

      <span style={{ flex: 1 }}>{movie.title}</span>

      <span style={{ opacity: 0.7, fontSize: "14px" }}>{movie.genre}</span>
      <span style={{ opacity: 0.7, fontSize: "14px" }}>{movie.year}</span>
      <span style={{ fontSize: "14px" }}>Rating: {movie.rating}</span>

      <button onClick={handleDetail}>Chi tiết</button>
    </li>
  );
}

export default memo(MovieItem);