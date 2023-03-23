import { useLocation, Link } from 'react-router-dom';

export const SearchList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ul>
        {movies.map(({ id, original_title }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              <p>{original_title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
