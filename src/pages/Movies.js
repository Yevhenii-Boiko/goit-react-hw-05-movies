import { DebounceInput } from 'react-debounce-input';
import { SearchList } from 'components/SearchList/SearchList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesSearch } from 'services/Api-Service';
import { Toaster, toast } from 'react-hot-toast';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  // const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;

    const getMovies = async () => {
      try {
        const movies = await getMoviesSearch(query);

        if (!movies.length) {
          toast.error(
            'Sorry, there are no films matching your search query. Please change you query request',
            {
              duration: 3000,
            }
          );
          // setError('Sorry. There are no movies...');
          return;
        }
        setMovies(movies);
      } catch (error) {
      } finally {
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
  };

  return (
    <div>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 1500,
        }}
      />
      <form onSubmit={handleSubmit}>
        <DebounceInput
          minLength={2}
          debounceTimeout={1000}
          type="text"
          name="query"
          value={query}
          autoComplete="off"
          autoFocus
          onChange={handleChange}
        />
      </form>
      {Movies && <SearchList movies={movies} />}
    </div>
  );
};

export default Movies;
