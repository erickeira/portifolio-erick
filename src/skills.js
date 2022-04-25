import './styles.css';
import Html5 from "./images/html.png";
import Css3 from "./images/css.png";
import Java from "./images/java.png";
import Php from "./images/php.png";
import {GrSquare} from 'react-icons/gr';

function Skills(){
    return (
      <div className="skills">
        <h2><GrSquare className='azul'/> Skills</h2>
        <ul className="flex-container">
            <li className="item-skills">
                <h2>HTML5</h2>
                <img className="icon-skills" src={Html5 }/>
                <div className="progress">
                    <div className="progressohtml"></div>
                </div>
            </li>
            <li className="item-skills">
                <h2>CSS3</h2>
                <img className="icon-skills" src={Css3 }/>
                <div className="progress">
                    <div className="progressocss"></div>
                </div>
            </li>
            <li className="item-skills">
                <h2>JAVA</h2>
                <img className="icon-skills" src={Java }/>
                <div className="progress">
                    <div className="progressojava"></div>
                </div>
            </li>
            <li className="item-skills">
                <h2>PHP</h2>
                <img  className="icon-skills" src={Php }/>
                <div className="progress">
                    <div className="progressophp"></div>
                </div>
            </li>
        </ul>

      </div>
  );
};
export default Skills;
