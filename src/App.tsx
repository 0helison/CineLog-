import { Outlet } from 'react-router-dom'
import Navbar from './componets/Navbar'

function App() {
 
  return (
    <div className='App'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App