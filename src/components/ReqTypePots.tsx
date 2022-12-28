import { ChangeEvent, useState, useEffect } from "react"
import { api } from '../api'

type Props = {
  onAdd: (title: string, body: string) => void;
}

export const ReqPots = () => {
  const [addTitleText, setAddTitleText] = useState('')
  const [addBodyText, setAddBodyText] = useState('')

  useEffect(() =>{
    handleAddPost(addTitleText, addBodyText);
  }, [])

  const handleAddPost = async (title: string, body: string) => {
    let json = await api.addNewPost(title, body, 1);
    if(json.id){
      alert(`${addTitleText} - ${addBodyText}`)
    }else{
      alert('Ocorreu algum erro!')
    }
  }

  const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddTitleText(e.target.value)
  }
  const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAddBodyText(e.target.value)
  }
  const handleAddClick = () => {
    if(addTitleText && addBodyText){
     alert('Adicionado com sucesso!')
    }else{
      alert('Preencha todos os campos')
    }
  }
  
  return(
    <div>
      <fieldset className="border-2 mb-3 p-3">
        <legend>Adicionar Novo Pots</legend>
        <input 
          value={addTitleText} 
          onChange={handleAddTitleChange}
          className="block border"
          type="text" placeholder="Digite um titulo" />
        <textarea
          className="block border"
          value={addBodyText}
          onChange={handleAddBodyChange}>
        </textarea>

        <button 
          className="block border"
          onClick={handleAddClick}>Adicionar</button>
      </fieldset>
    </div>
  )
}