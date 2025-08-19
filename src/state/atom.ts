import { atom } from "recoil";


//ATOM É DO RECOIL PARA ARMAZENAR AS INFORMAÇÕES 

export const listaParticipantesState = atom<string[]>({
    key: 'listaParticipantesState',
    default: [],
  });   

  export const erroState = atom<string>({
    key: 'erroState',
    default: '',
  });     
  
  
  export const resultadoDoAmigoSecretoState = atom<Map<string, string>>({
    key: 'resultadoDoAmigoSecretoState',
    default: new Map()
    
  })
  