import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReview } from 'services/getTrendingMovies';
import ReviewItem from 'components/ReviewItem/ReviewItem';

const Reviews = () => {
  const { id } = useParams();
  const [reviewState, setReviewState] = useState({
    reviews: [],
    isLoading: false,
    hasError: false,
    errorMessage: 'Something went wrong! Try again later',
  });

  useEffect(() => {
    if (!id) return;
    async function fetchReviews() {
      try {
        setReviewState(prev => ({ ...prev, isLoading: true }));
        const reviews = await getReview(id);
        setReviewState(prev => ({ ...prev, reviews }));
      } catch (error) {
        setReviewState(prev => ({
          ...prev,
          hasError: true,
          errorMessage: error.message,
        }));
      } finally {
        setReviewState(prev => ({ ...prev, isLoading: false }));
      }
    }
    fetchReviews();
  }, [id]);

  return (
    <>
      {reviewState.hasError && (
        <div>
          <p>{reviewState.errorMessage}</p>
        </div>
      )}
      {reviewState.isLoading && (
        <div>
          <p>Loading...</p>
        </div>
      )}
      {reviewState.reviews.length === 0 ? (
        <p>No reviews for this movie found</p>
      ) : (
        <ul>
          {reviewState.reviews.map(author => (
            <ReviewItem
              key={author.id}
              author={author.author}
              content={author.content}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
