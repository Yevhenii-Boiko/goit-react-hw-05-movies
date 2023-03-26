import { useLocation, Link } from 'react-router-dom';
import { MovieTitle } from './SearchList.styled';

export const SearchList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ul>
        {movies.map(({ id, original_title }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              <MovieTitle>{original_title}</MovieTitle>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
