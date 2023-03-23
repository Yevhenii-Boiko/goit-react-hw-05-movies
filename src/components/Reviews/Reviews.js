import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/Api-Service';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const getReviews = async movieId => {
      try {
        const reviews = await getMovieReviews(movieId);
        setReviews(reviews);
        console.log(reviews);
      } catch (error) {
      } finally {
      }
    };
    getReviews(movieId);
  }, [movieId]);

  return (
    <>
      {reviews && (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Reviews;
