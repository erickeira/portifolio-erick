import './styles.css';
import Projeto1 from "./images/aluracord.png";
import {BsGithub} from 'react-icons/bs';
import {MdAirplay} from 'react-icons/md';
import {GrSquare} from 'react-icons/gr';

function Laboratorio(){
    return (
      <div className="laboratorio">
          <h2><GrSquare className='azul'/>   Laboratorio</h2>
          <ul className="flex-container">
            <li className="projeto">
                <h3>Alura Cord</h3>
                
                <img className="imgprojeto" src={Projeto1 }/>
                <p>Projeto com focado em criar um chat, com tema do Discord.</p>
                <ul className="tagsprojeto"> 
                    <li className="tagprojeto">Html</li>
                    <li className="tagprojeto">Css</li>
                    <li className="tagprojeto">React</li>
                </ul>
                <div className="botoesprojeto">
                <a href=''><BsGithub className="iconprojeto"/> Repositorio</a>
                <a href=''><MdAirplay className="iconprojeto"/> Demonstração</a>
                </div>
            </li>
            <li className="projeto">
                <h3>Alura Cord</h3>
                
                <img className="imgprojeto" src={Projeto1 }/>
                <p>Projeto com focado em criar um chat, com tema do Discord.</p>
                <ul className="tagsprojeto"> 
                    <li className="tagprojeto">Html</li>
                    <li className="tagprojeto">Css</li>
                    <li className="tagprojeto">React</li>
                </ul>
                <div className="botoesprojeto">
                <a href=''><BsGithub className="iconprojeto"/> Repositorio</a>
                <a href=''><MdAirplay className="iconprojeto"/> Demonstração</a>
                </div>
            </li>

            <li className="projeto">
                <h3>Alura Cord</h3>
                
                <img className="imgprojeto" src={Projeto1 }/>
                <p>Projeto com focado em criar um chat, com tema do Discord.</p>
                <ul className="tagsprojeto"> 
                    <li className="tagprojeto">Html</li>
                    <li className="tagprojeto">Css</li>
                    <li className="tagprojeto">React</li>
                </ul>
                <div className="botoesprojeto">
                <a href=''><BsGithub className="iconprojeto"/> Repositorio</a>
                <a href=''><MdAirplay className="iconprojeto"/> Demonstração</a>
                </div>
            </li>


          </ul>        
      </div>
  );
};
export default Laboratorio;
