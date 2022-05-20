import React, { useState } from 'react'; 
import axios from 'axios';

export default function Home() {
  const [usuario, setUsuario] = useState('')
  function handlePesq() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data))
  }
  return (
    <>
      <h1>{usuario}</h1>
      <input className='usuarioInput' placeholder='usuario' value={usuario} onChange={e => setUsuario(e.target.value)}/>
      <button type='button' onClick={handlePesq}>Pesquisar</button>
    </>
  );
}

