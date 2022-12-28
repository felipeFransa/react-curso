import { Link } from 'react-router-dom'

export const Home = () => {
  return(
    <div>Pagina Home
      <button className='p-3'>
        <Link to='/sobre/felipe'>Felipe</Link>
      </button>
      <button className='p-3'>
        <Link to='/sobre/silva'>Silva</Link>
      </button>
    </div>
  )
}