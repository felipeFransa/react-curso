import { Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { NotFound } from './pages/NotFound'
import { AboutItem } from './pages/AboutItem'
import { RequireAuth } from './RequireAuth'

const App = () => {
  
  return (
    <div className="p-4">
      <header>
        <h1>Titulo do site</h1>
      </header>
      <hr />
      <div className="py-4">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sobre" element={<RequireAuth><About/></RequireAuth>}/>
          <Route path="/sobre/:slug" element={<AboutItem />}/>
          <Route path="#" element={<NotFound />}/>
        </Routes>
      </div>
      <hr />
      <footer>todos ps direitos reservados</footer>
    </div>
  ) 
}
export default App;