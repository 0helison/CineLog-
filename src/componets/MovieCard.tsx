import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

const imageURL = import.meta.env.VITE_IMG

interface Movie {
  id: number
  title: string
  poster_path: string
  vote_average: number
}

interface MovieCardProps {
  movie: Movie
  showLink?: boolean
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, showLink = true }) => {

  function formatedAverage(number: number): string {
    return number.toFixed(1)
  }

  return (
    <div className='movie-card'>
      <img src={imageURL + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <h5><FaStar /> {formatedAverage(movie.vote_average)}</h5>
      {showLink && <Link to={`/movie/${movie.id}`}>See details</Link>}
    </div>
  )
}

export default MovieCard
