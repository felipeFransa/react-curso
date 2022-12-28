import { RouteList } from './routes/RouteList'

const App = () => {
  
  return (
    <div className="p-4">
      <header>
        <h1>Titulo do site</h1>
      </header>
      <hr />
      <div className="py-4">
        <RouteList />
      </div>
      <hr />
      <footer>todos ps direitos reservados</footer>
    </div>
  ) 
}
export default App;