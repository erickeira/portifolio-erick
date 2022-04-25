import './styles.css';
import Foto from "./images/foto-perfil.png";
import {GrSquare} from 'react-icons/gr';

function Sobre(){
    return (
      <div className="sobre">
          <div className="container">
          <div className="foto-container">
          <h2><img className="foto" src={Foto }/></h2> 
          </div>
          
          <div className="sobre-texto">
            <h2><GrSquare className='azul'/>  Sobre</h2>
            <h3>Quem sou eu?</h3>
            <p>
                        Meu nome é Erick, sou Desenvolverdor Front-End iniciante, este é meu portifolio, estou disponivel para propostas de aprendizado como free-lancer. Confira meus projetos e entre em contato.
            </p>
          </div>
          
          </div>
          
      </div>
  );
};
export default Sobre;
