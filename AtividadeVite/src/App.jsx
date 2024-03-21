import { useState } from 'react'
import './App.css'
import img from './assets/img/imgInicial.svg'

function App() {


  return (
    <>

      <nav>
        <p>VITE</p>
        <ul>
          <li>Início</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
      </nav>
                                                                      
      <main className='pagInicial'>
        <div className='text'>
        <h1>Seja Bem-Vindo(a)</h1>
        <img src={img} alt="" />
        </div>

      </main>
    </>
  )
}

export default App
