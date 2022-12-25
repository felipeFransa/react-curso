import { useEffect, useState } from "react"

export const Patrulha = () => {
  const [patrulha, setPatrulha] = useState(0);
  const [patrulhaFeita, setPatrulhaFeita] = useState(0);

  const iniciaPatrulha = () => {
    setPatrulha(patrulha + 1);
  }  
  useEffect(()=>{
    setPatrulhaFeita(patrulhaFeita + 1)},[patrulha]); 

  return (
    <div className="flex-1">
      <button className="flex-1 py-2.5 bg-emerald-500 rounded w-2/4" onClick={iniciaPatrulha}>Inicia Patrulha</button>
      <h1 className="flex-1 py-2.5">Patrulhas feitas {patrulha}</h1>
    </div>
  )
}