import React from 'react';
import { Link } from 'react-router-dom';

const baseImageUrl = 'https://image.tmdb.org/t/p/w300';

const MovieItem = ({ id, title, location, poster_path }) => {
  return (
    <li key={id}>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        <img src={`${baseImageUrl}${poster_path}`} alt={title} />
      </Link>
    </li>
  );
};

export default MovieItem;
