import './styles.css';
import Logo from "./images/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";


function Header() {
  function handleSubmit(e) {
  
  }

  return (
      <header>
        <div className="caixa-header">
        <h1 ><a href=''><img className="logo" src={Logo }/></a></h1> 
        <nav>
					<ul>
						<li><a href="#inicio" onClick={handleSubmit}>Início</a></li>
						<li><a href="#sobre">Sobre</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#laboratorio">Laboratorio</a></li>
						<li><a href="#contato">Contato</a></li>
					</ul>
			  </nav>
        </div>
      </header>
  );
}

export default Header;
