import React from "react";
import MovieListItem from "../movie/ListItem";
import "./List.css";

const MovieList = ({ movies = [] }) => {
  return (
    <div class="movie-list">
      {movies && movies.map(movie => <MovieListItem movie={movie} />)}
    </div>
  );
};

export default MovieList;