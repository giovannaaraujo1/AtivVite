import '../App.css'
import img from '../assets/img/imgInicial.svg'

export const Home = () => {
    return (
        <div className='text'>
          <p>Seja Bem-Vindo(a)! Explore e inspire-se. </p>
          <img src={img} alt="" />
        </div>
    )
}