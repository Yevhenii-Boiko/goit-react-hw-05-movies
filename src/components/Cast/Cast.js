import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/Api-Service';

const Cast = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const getCredits = async movieId => {
      try {
        // setIsLoading(true);
        const credits = await getMovieCast(movieId);
        setCredits(credits);
        console.log(credits);
        // setError('');
      } catch (error) {
        // setError('Oops. Something went wrong');
      } finally {
        // setIsLoading(false);
      }
    };
    getCredits(movieId);
  }, [movieId]);

  return (
    <>
      {credits.length === 0 && <h2>We don't have info about casts</h2>}
      {credits && (
        <ul>
          {credits.map(({ id, name, profile_path }) => {
            return (
              <li key={id}>
                <img src={profile_path} alt={name} width="300" />
                <p>{name}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Cast;