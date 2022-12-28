import { Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { AboutFelipe } from './pages/AboutFelipe'
import { AboutSilva } from './pages/AboutSilva'

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
          <Route path="/sobre" element={<About />}/>
          <Route path="/sobre/felipe" element={<AboutFelipe />}/>
          <Route path="/sobre/silva" element={<AboutSilva />}/>
        </Routes>
      </div>
      <hr />
      <footer>todos ps direitos reservados</footer>
    </div>
  ) 
}
export default App;