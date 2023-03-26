import { Details } from 'components/Details/Details';
import {
  BackLink,
  InfoLink,
  InfoContainer,
} from 'components/Details/Details.styled';
import { Suspense, useRef, useState, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/Api-Service';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const { movieId } = useParams();

  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    if (!movieId) return;
    const getDetailsById = async movieId => {
      try {
        const movieDetails = await getMovieDetails(movieId);
        setMovieDetails(movieDetails);
      } catch (error) {
      } finally {
      }
    };
    getDetailsById(movieId);
  }, [movieId]);

  return (
    <>
      {movieDetails && (
        <div>
          <BackLink to={backLinkLocationRef.current}>Go back</BackLink>
          <Details movieDetails={movieDetails} />
          <div>
            <h2>Additional information</h2>
            <InfoContainer>
              <li>
                <InfoLink to="cast">Cast</InfoLink>
              </li>
              <li>
                <InfoLink to="reviews">Reviews</InfoLink>
              </li>
            </InfoContainer>
          </div>
        </div>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
