import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/Api-Service';
import { CastItem, CastList } from './Cast.styled';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const getCredits = async movieId => {
      try {
        const credits = await getMovieCast(movieId);
        setCredits(credits);
      } catch (error) {
      } finally {
      }
    };
    getCredits(movieId);
  }, [movieId]);

  return (
    <>
      {credits.length === 0 && <h2>We don't have info about casts</h2>}
      {credits && (
        <CastList>
          {credits.map(({ id, name, profile_path }) => {
            return (
              <CastItem key={id}>
                <img src={profile_path} alt={name} width="300" />
                <p>{name}</p>
              </CastItem>
            );
          })}
        </CastList>
      )}
    </>
  );
};

export default Cast;
