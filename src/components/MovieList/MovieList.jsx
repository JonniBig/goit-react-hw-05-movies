import MovieItem from 'components/MovieItem/MovieItem';
import React from 'react';
import css from './MovieList.module.css'

const MovieList = ({ trendingMovies }) => {
  
  return (
    <ul className={css.MovieList}>
      {trendingMovies.map(movie => {
        return (
          <MovieItem
            key={movie.id}
            title={movie.title}
            id={movie.id}
            poster_path={movie.poster_path}
          />
        );
      })}
    </ul>
  );
};

export default MovieList;
