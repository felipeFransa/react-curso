import { Header } from './components/Header'
import { Main } from './components/Main'
import { Formulario } from './components/Formulario'
import { Patrulha } from './components/Patrulha';
import { PotsPage } from './components/LoadPots'
import { ReqPots } from './components/ReqTypePots'
import { api } from './api'


const App = () => {
  const handleAddPost = async (title: string, body: string) => {
    let json = await api.addNewPost(title, body, 1);
    if(json.id){
      alert('Post adicionado com sucesso')
    }else{
      alert('Ocorreu algum erro!')
    }
  }
  return (
    <div>
      <ReqPots onAdd={handleAddPost}/>
    </div>
  ) 
}
export default App;