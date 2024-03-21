import { useState } from 'react'
import './App.css'
import img from './assets/img/imgInicial.svg'
import img1 from './assets/img/iconGitHub.svg'

function App() {


  return (
    <>
    

      <nav>
        <p>VITE</p>
        <ul>
          <li>Início</li>
          <li>ODS</li>
          <li>Sobre</li>
        </ul>
      </nav>
                                                                      
      <main className='pagInicial'>
        <div className='text'>
        <p>Seja Bem-Vindo(a)! Explore e inspire-se. </p>
        <img src={img} alt="" />
        </div>
      </main>

      <footer className='mainFooter'>
      <a href="https://github.com/giovannaaraujo1"> <img src={img1}></img></a>
      <p>Criado em 2024 &copy;</p>
      </footer>

      
    </>
  )
}

export default App
