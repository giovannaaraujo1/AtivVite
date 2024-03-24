import '../App.css'
import fotoPerfil from '../assets/img/perfil.jpeg'
import iconLinkedin from '../assets/img/iconLinkedin.svg'
export const Sobre = () => {
    return (

        <div className="meuPerfil">
           
            <div className='sobre'>
            <h1>Sobre mim</h1>
            <img src={fotoPerfil} alt="" />
            <p>21 anos, nascida no Recife, residente do bairro da Linha do Tiro.</p>
            </div>

        <div className='infos'>

            <h3>Formações Academicas:</h3>

            <ul>

                <li> Formada em Segurança do Trabalho </li>
                <li> Graduando Administração de Empresas, na Universidade de Pernambuco, atualmente cursando o 8° período.</li>
                <li>Graduando Sistemas para Internet, na Universidade Católica de Pernambuco, atualmente cursando o 3° período. </li>
            </ul>



            <h3>Experiencias Profissionais: </h3>
            <ul>
                <li>Jovem Aprendiz de Segurança do Trabalho (2020 - 2022).</li>
                <li>Auxiliar administrativo de Segurança do Trabalho (2022).</li>
                <li>Estágiaria do setor financeiro (2023).</li>
            </ul>



            <h3>Tecnologias que domino:</h3>
            <ul>
                <li>HTML SEMÂNTICO</li>
                <li>CSS</li>
                <li>JAVA</li>
                <li>REACTJS</li>
            </ul>

            <div className='perfis'>
                <a className='linkedin' href="https://br.linkedin.com/in/giovanna-araujo-1b0817270" target='_blank'>
                    <img src={iconLinkedin} alt="" />
                    <p>Acesse meu perfil no linkedin!</p>
                </a>
            </div>
        </div>
        </div>

    )
}