import { useReducer } from 'react';

type reducerState = {
  count: number;
}
type reducerAction = {
  type: string;
}
const initialState = { count: 0}
const reducer = (state: reducerState, action: reducerAction) => {
 switch(action.type){
  case 'ADD':
    return {...state, count: state.count + 1};
    break;
  case 'DEL':
    if(state.count > 0){
      return {...state, count: state.count - 1};
    }
    break;
  case 'RESET':
    return initialState;
    break;
 }
 return state;
}
export const Contador = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return(
    <div>
      Contagem: {state.count} <br />
      <button onClick={()=>dispatch({type: 'ADD'})}>Adicionar</button>
      <button onClick={()=>dispatch({type: 'DEL'})}>Remover</button>
      <button onClick={()=>dispatch({type: 'RESET'})}>Resetar</button>
    </div>
  )
}