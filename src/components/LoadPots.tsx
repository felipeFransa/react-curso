import { useEffect, useState } from 'react';
import { Pots } from '../types/Pots'
import { api } from '../api'

export const PotsPage = () => {
  const [pots, setPots] = useState<Pots[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() =>{
    loadPots();
  }, [])

  const loadPots = async () => {
    try {
      setLoading(true)
      let json = await api.getAllPosts();
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
      {!loading && pots.length > 0 && 
      <>
        <div>
          <div>Total de pots {pots.length}</div>
          {pots.map((item, index) => (
          <div key={index}>
          <h4>{item.title}</h4><br />
          <p>{item.body}</p>
          </div>
      ))}
        </div>
      </> }
    </div>
)}