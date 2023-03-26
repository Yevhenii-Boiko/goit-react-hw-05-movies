import { useEffect, useState } from 'react';
import { getTrending } from 'services/Api-Service';
import TrendingMoviesList from 'components/TrendingMovies/TrendingMovies';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await getTrending();
        setMovies(data);
      } catch (error) {
      } finally {
      }
    };
    getMovies();
  }, []);

  return <TrendingMoviesList movies={movies} />;
};

export default Home;
