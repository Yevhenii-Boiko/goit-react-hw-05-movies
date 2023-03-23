import { useEffect, useState } from 'react';
import { getTrending } from 'services/Api-Service';
import TrendingMoviesList from 'components/TrendingMovies/TrendingMovies';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        // setLoading(true);
        const data = await getTrending();
        setMovies(data);
        // setError('');
      } catch (error) {
        // setError('Oops. Something went wrong...');
      } finally {
        // setLoading(false);
      }
    };
    getMovies();
  }, []);

  return <TrendingMoviesList movies={movies} />;
};

export default Home;
