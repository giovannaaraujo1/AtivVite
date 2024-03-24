import './App.css'
import img1 from './assets/img/iconGitHub.svg'
import { Home } from './Pages/Home'
import { Route, Routes, Link } from 'react-router-dom'
import { Ods } from './Pages/Ods'
import { Sobre } from './Pages/Sobre'

function App() {

  return (
    <>
      <nav>
        <p>VITE</p>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/ods">ODS</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
        </ul>
      </nav>

      <main className='pagInicial'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/ods' element={<Ods/>}></Route>
          <Route path='/sobre' element={<Sobre/>}></Route>
        </Routes>
      </main>

      <footer className='mainFooter'>
        <a href="https://github.com/giovannaaraujo1" target='_blank'> <img src={img1}></img></a> 
        <p>Criado em 2024 &copy;</p>
      </footer>
    </>
  )
}

export default App
