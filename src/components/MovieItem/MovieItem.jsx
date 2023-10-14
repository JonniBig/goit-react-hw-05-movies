import React from 'react';
import { Link } from 'react-router-dom';
import css from './MovieItem.module.css'

const baseImageUrl = 'https://image.tmdb.org/t/p/w300';

const MovieItem = ({ id, title, location, poster_path }) => {
  return (
    <li className={css.MovieItem}>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        <img className={css.MovieIMG} src={`${baseImageUrl}${poster_path}`} alt={title} />
        
      </Link>
    </li>
  );
};

export default MovieItem;
