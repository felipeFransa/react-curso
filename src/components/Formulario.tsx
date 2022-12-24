import { useState, useEffect, ChangeEvent } from 'react'

export const Formulario = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  useEffect(()=>{
    setFullName(`${name} ${lastName}`)
  }, [name, lastName])

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const handleLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value)
  }
  return (
   <div>
      <input type="text" value={name} placeholder='Digite seu nome' onChange={handleName}/>
      <input type="text" value={lastName} placeholder='Digite seu nome'onChange={handleLastName}/>
      <p>Seu nome é: {fullName}</p>
   </div>
  )
}