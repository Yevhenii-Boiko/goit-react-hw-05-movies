import { SearchList } from 'components/SearchList/SearchList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesSearch } from 'services/Api-Service';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  // const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;

    const getMovies = async () => {
      try {
        // setLoading(true);
        const movies = getMoviesSearch(query);

        if (!movies.length) {
          // setError('Sorry. There are no movies...');
          return;
        }
        setMovies(movies);
        // setError('');
      } catch (error) {
        // setError('Oops. Something went wrong');
      } finally {
        // setLoading(false);
      }
    };
    getMovies();
  }, [query]);

  const handleSubmit = evt => {
    evt.preventDefault();
  };

  const handleChange = evt => {
    const query = evt.target.value;
    if (query === '') {
      return setSearchParams({});
    }
    setSearchParams({ query });
    console.log(query);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={query}
          autoComplete="off"
          autoFocus
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {<SearchList movies={movies} />}
    </div>
  );
};

export default Movies;
