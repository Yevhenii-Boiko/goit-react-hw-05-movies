import { Link, useLocation } from 'react-router-dom';

const TrendingMoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {movies.map(({ id, original_title }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              <p>{original_title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TrendingMoviesList;
