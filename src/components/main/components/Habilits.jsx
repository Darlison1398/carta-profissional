import { useLayoutEffect } from "react";
import React from 'react';
import hTmlImage from '../../../assets/icons/html.png';
import csS3 from '../../../assets/icons/css-3.png';
import javasCript from '../../../assets/icons/js.png';
import bootstrap from '../../../assets/icons/bootstrap.png';
import java from '../../../assets/icons/java.png';
import mysql from '../../../assets/icons/mysql.png';
import postgres from '../../../assets/icons/postgre.png';
import rea from '../../../assets/icons/science.png';
import typeScript from '../../../assets/icons/typescript.png';
import nodeI from '../../../assets/icons/nodejs.png';
import gitI from '../../../assets/icons/git.png';
import gitHI from '../../../assets/icons/github.png';
import figI from '../../../assets/icons/figma.png';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

function Habilits() {

        
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect( () => {
        gsap.to(".item", {
            x:0,
            opacity: 1, 
            scrollTrigger: {
                trigger: ".item",
                //markers:true,
                start: "top 650px",
                end: "bottom 500px",
                scrub: true,
            }
        })
        
        return () => {
            gsap.killTweensOf(".item")
        }
    }, []);
    

    
    return (
        <div className="container text-center mt-5" id='container'>
            <h3>Soft Skills</h3>
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
                        <img src={gitI} alt="git" />
                    </div>
                    <span>Git</span>
                </div>

                <div className="item">
                    <div className="cont-icon">
                        <img src={gitHI} alt="github" />
                    </div>
                    <span>Github</span>
                </div>

                <div className="item">
                    <div className="cont-icon">
                        <img src={figI} alt="figma" />
                    </div>
                    <span>Figma</span>
                </div>
            </div>
        </div>
    );
};

export default Habilits;