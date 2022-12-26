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
  const handleAddClick = () => {
    
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