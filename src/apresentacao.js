import './styles.css';
import Imgapresentacao from "./images/img-sobre.png";

function Apresentacao() {
  return (
      <div className="apresentacao">
          <div className="descricao-apresentacao">
          <p className="bemvindo">Bem Vindo!</p>
          <h2 className="nome-apresentacao">Meu nome é Erick,</h2>
          <h3 className="oquesou">sou um desenvolvedor Front-End.</h3>
          </div>
          <img className="img-apresentacao" src={Imgapresentacao }/>
      </div>
  );
}

export default Apresentacao;
