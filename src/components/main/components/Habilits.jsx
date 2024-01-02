import React from 'react';
import hTmlImage from '../../../assets/icons/html-5.png';
import csS3 from '../../../assets/icons/css-3.png';
import javasCript from '../../../assets/icons/js.png';
import bootstrap from '../../../assets/icons/bootstrap.png';
import java from '../../../assets/icons/java.png';
import mysql from '../../../assets/icons/mysql.png';
import postgres from '../../../assets/icons/postgre.png';
import rea from '../../../assets/icons/science.png';
import typeScript from '../../../assets/icons/typescript.png';
import nodeI from '../../../assets/icons/nodejs.png';

function Habilits() {
    return (
        <div className="container-hab">
            <h3>Dentre minhas principais habilidades destacam-se às seguintes</h3>
            <div className="know">
                <div className="item">
                    <div className="cont-icon">
                        <img src={hTmlImage} alt="html" />
                    </div>
                    <span>Html5</span>
                </div>

                <div className="item">
                    <div className="cont-icon">
                        <img src={csS3} alt="css" />
                    </div>
                    <span>Css3</span>
                </div>

                <div className="item">
                    <div className="cont-icon">
                        <img src={javasCript} alt="js" />
                    </div>
                    <span>Javascript</span>
                </div>

                <div className="item">
                    <div className="cont-icon">
                        <img src={bootstrap} alt="boots" />
                    </div>
                    <span>Bootstrap</span>
                </div>

                <div className="item">
                    <div className="cont-icon">
                        <img src={rea} alt="react" />
                    </div>
                    <span>React.js</span>
                </div>

                <div className="item">
                    <div className="cont-icon">
                        <img src={typeScript} alt="" />
                    </div>
                    <span>Typescript</span>
                </div>

                <div className="item">
                    <div className="cont-icon">
                        <img src={nodeI} alt="node" />
                    </div>
                    <span>Node.js</span>
                </div>

                {/*<div className="item">
                    <div className="cont-icon">
                        <FontAwesomeIcon icon={faCode} />
                    </div>
                    <span>jQuery</span>
                </div>*/}

                <div className="item">
                    <div className="cont-icon">
                        <img src={java} alt="jv" />
                    </div>
                    <span>Java</span>
                </div>

                <div className="item">
                    <div className="cont-icon">
                        <img src={mysql} alt="my" />
                    </div>
                    <span>MySQL</span>
                </div>

                <div className="item">
                    <div className="cont-icon">
                        <img src={postgres} alt="post" />
                    </div>
                    <span>PostgreSQL</span>
                </div>

                <div className="item">
                    <div className="cont-icon">
                    </div>
                    <span>Git</span>
                </div>

                <div className="item">
                    <div className="cont-icon">
                    </div>
                    <span>Github</span>
                </div>

                <div className="item">
                    <div className="cont-icon">
                    </div>
                    <span>Figma</span>
                </div>
            </div>
        </div>
    );
};

export default Habilits;