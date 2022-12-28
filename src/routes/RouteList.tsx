import { Routes, Route} from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { NotFound } from '../pages/NotFound'
import { AboutItem } from '../pages/AboutItem'
import { RequireAuth } from '../RequireAuth'


export const RouteList = () => {
  return(
    <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sobre" element={<RequireAuth><About/></RequireAuth>}/>
          <Route path="/sobre/:slug" element={<AboutItem />}/>
          <Route path="#" element={<NotFound />}/>
    </Routes>
  )
}