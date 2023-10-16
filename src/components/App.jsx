import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage'));
const Movies = lazy(() => import('../pages/Movies'));
const Header = lazy(() => import('./Header/Header'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id/*" element={<MovieDetails />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
