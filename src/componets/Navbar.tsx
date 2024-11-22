import { useState, FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiSearchAlt2 } from 'react-icons/bi'
import './Navbar.css'

const Navbar: React.FC = () => {
  const [search, setSearch] = useState<string>('')

  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!search) return
    navigate(`/search?q=${search}`)
    setSearch('')
  }

  return (
    <nav id='navbar'>
      <h1>
        <Link to='/'>
          CineLog
        </Link>
      </h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='Fetch a movie' 
          onChange={(e) => setSearch(e.target.value)} 
          value={search} 
        />
        <button type='submit'><BiSearchAlt2 /></button>
      </form>
    </nav>
  )
}

export default Navbar
