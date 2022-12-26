import { ChangeEvent, useState } from "react"

export const ReqPots = () => {
  const [addTitleText, setAddTitleText] = useState('')
  const [addBodyText, setAddBodyText] = useState('')

  const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddTitleText(e.target.value)
  }
  const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAddBodyText(e.target.value)
  }
  const handleAddClick = async () => {
    if(addTitleText && addBodyText){
      let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: addTitleText,
          body: addBodyText,
          userId: 1
        }),
        headers:{
          'Content-Type': 'application/json'
        }
      });
      let json = await response.json();
      if(json.id){
        alert("Pots adicionado com sucesso")
      }else{
        alert('ocorreu um erro!')
      }
    }else{
      alert('Preencha os campos')}
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