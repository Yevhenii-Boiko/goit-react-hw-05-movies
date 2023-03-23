import { Details } from 'components/Details/Details';
import { Suspense, useRef, useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
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
        // setLoading(true);
        const movieDetails = await getMovieDetails(movieId);
        setMovieDetails(movieDetails);
        // setError('');
      } catch (error) {
        // setError('Oops. Somethig went wrong');
      } finally {
        // setLoading(false);
      }
    };
    getDetailsById(movieId);
  }, [movieId]);

  return (
    <>
      {movieDetails && (
        <div>
          <Link to={backLinkLocationRef.current}>Go back</Link>
          <Details movieDetails={movieDetails} />
          <div>
            <h2>Additional information</h2>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
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
