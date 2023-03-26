import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/Api-Service';
import { Author, Content } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const getReviews = async movieId => {
      try {
        const reviews = await getMovieReviews(movieId);
        setReviews(reviews);
      } catch (error) {
      } finally {
      }
    };
    getReviews(movieId);
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 && <h2>Your review will be the first...</h2>}
      {reviews && (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <Author>Author: {author}</Author>
                <Content>{content}</Content>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Reviews;
