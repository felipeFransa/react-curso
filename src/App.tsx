import { Header } from './components/Header'
import { Main } from './components/Main'
import { Formulario } from './components/Formulario'
import { Patrulha } from './components/Patrulha';
import { useEffect, useState } from 'react';
import { Pots } from './types/Pots'


const App = () => {
 const [pots, setPots] = useState<Pots[]>([]);
 const [loading, setLoading] = useState<boolean>(false);

 useEffect(() =>{
  loadPots();
 }, [])

 const loadPots = async () => {
  try {
    setLoading(true)
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    setLoading(false)
    setPots(json);
  }
  catch(e) {
    setLoading(false);
    alert('Erro! Tente mais tarde')
  }
 }


  return (
    <div>
      {loading && <div>Carregando....</div>}
      <div>
      <div>Total de pots {pots.length}</div>
      {pots.map((item, index) => (
        <div key={index}>
          <h4>{item.title}</h4><br />
          <p>{item.body}</p>
        </div>
      ))}
      </div>
    </div>
  )
}
export default App;