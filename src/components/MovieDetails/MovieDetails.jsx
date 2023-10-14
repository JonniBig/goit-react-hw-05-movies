import React, { useEffect, useRef, useState, lazy, Suspense } from 'react';
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovie } from 'services/getTrendingMovies';
import MovieDetailsItem from 'components/MovieDetailsItem/MovieDetailsItem';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();

  const [pageData, setPageData] = useState({
    movieData: {},
    isLoading: false,
    hasError: false,
    errorMessage: 'Something went wrong! Try again later',
  });

  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!id) return;

    async function fetchMovieData() {
      try {
        setPageData(prevData => ({ ...prevData, isLoading: true }));
        const mDetails = await getMovie(id);

        setPageData(prevData => ({ ...prevData, movieData: mDetails }));
      } catch (error) {
        setPageData(prevData => ({
          ...prevData,
          hasError: true,
          errorMessage: error.message,
        }));
      } finally {
        setPageData(prevData => ({ ...prevData, isLoading: false }));
      }
    }
    fetchMovieData();
  }, [id]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Link to={backLinkRef.current}>Go back</Link>
      {pageData.hasError && (
        <div>
          <p>{pageData.errorMessage}</p>
        </div>
      )}
      {pageData.isLoading && (
        <div>
          <p>Loading...</p>
        </div>
      )}
      <div>
        {pageData.movieData.poster_path && (
          <MovieDetailsItem
            id={pageData.movieData.id}
            poster_path={pageData.movieData.poster_path}
            title={pageData.movieData.title}
            genres={pageData.movieData.genres}
            overview={pageData.movieData.overview}
          />
        )}
        <div>
          <h2>Additional Information</h2>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </div>
    </Suspense>
  );
};

export default MovieDetails;
