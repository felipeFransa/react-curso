import { Header } from './components/Header'
import { Main } from './components/Main'
import { Formulario } from './components/Formulario'
import { Patrulha } from './components/Patrulha';
import { PotsPage } from './components/LoadPots'
import { ReqPots } from './components/ReqTypePots'


const App = () => {
  const handleAddPost = async (title: string, body: string) => {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({title, body, userId: 1}),
        headers:{'Content-Type': 'application/json'}});
      let json = await response.json();
      if(json.id){
        alert("Pots adicionado com sucesso")
      }else{
        alert('ocorreu um erro!')
      }
  return (
    <div>
      <ReqPots onAdd={handleAddPost}/>
    </div>
  ) 
}}
export default App;