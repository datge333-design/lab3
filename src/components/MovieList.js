import MovieItem from "./MovieItem";

function MovieList({ movies, favorites, onToggleFavorite }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          isFavorite={favorites.includes(movie.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </ul>
  );
}

export default MovieList;