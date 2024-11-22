import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../componets/MovieCard'
import './Movie.css'

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

interface Movie {
  id: number
  title: string
  poster_path: string
  vote_average: number
  overview: string
  release_date: string
}

const Search: React.FC = () => {
  const [searchParams] = useSearchParams()
  const [movies, setMovies] = useState<Movie[]>([])
  const query = searchParams.get('q')

  const getSearchedMovies = async (url: string) => {
    const res = await fetch(url)
    const data = await res.json()

    setMovies(data.results)
  }

  useEffect(() => {
    if (query) {
      const searchWithQueryURL = `${searchURL}?api_key=${apiKey}&query=${query}`
      getSearchedMovies(searchWithQueryURL)
    }
  }, [query])

  return (
    <div className='container'>
      <h2 className='title'>
        Results for: <span className='query-text'>{query}</span>
      </h2>
      <div className='movies-container'>
        {movies.length === 0 && <p>No results found...</p>}
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}

export default Search
