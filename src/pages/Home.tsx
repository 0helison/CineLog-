import { useState, useEffect } from 'react';
import MovieCard from '../componets/MovieCard';
import './MovieGrid.css';

const moviesURL = import.meta.env.VITE_API 
const apiKey = import.meta.env.VITE_API_KEY

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

const Home = () => {
  const [topMovies, setTopMovies] = useState<Movie[]>([]);

  const getTopRateMovies = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRateUrl = `${moviesURL}top_rated?api_key=${apiKey}`;
    getTopRateMovies(topRateUrl);
  }, []);

  return (
    <div className='container'>
      <h2 className='title'>Best Movies</h2>
      <div className='movies-container'>
        {topMovies.length === 0 && <p>...</p>}
        {topMovies.length > 0 && 
          topMovies.map((movie) => 
            <MovieCard key={movie.id} movie={movie} />
          )}
      </div>
    </div>
  );
};

export default Home;
