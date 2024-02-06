import { useLayoutEffect } from "react";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import redirectoClimaTemp from "../../../assets/js/redirect/redirectToClimaTemp";
import redirectoCurriculu_web from "../../../assets/js/redirect/redirectToCurriculu_web";
import redirectoWordPress from "../../../assets/js/redirect/redirectToWordPress";
import redirectToProjetct from "../../../assets/js/redirect/redirectToProjetct";

function Portfolio() {

    
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect( () => {
        gsap.to(".project", {
            x:0,
            opacity: 1, 
            scrollTrigger: {
                trigger: ".project",
                //markers:true,
                start: "top 400px",
                end: "botton 200px",
                scrub: true,
            }
        })
        
        return () => {
            gsap.killTweensOf(".project")
        }
    }, []);
    

    return (
        <div className="container mt-5">
            <h3 className="text-center">Portfólio pessoal</h3>

            <section className="container-box d-flex justify-content-center align-items-center flex-wrap justify-content-between">
                <div className="project">
                    <h5>Drsilva clima-temp</h5>
                    <p>
                        Esse projeto é um sistema web onde é possível consultar o clima atual
                        de uma determinada cidade. Ele é um projeto simples onde eu criei apenas
                        para consumir um api e exibir os dados para o usuário. Nele, eu usei as
                        seguintes tecnologias: <span>Html5, Css3, Bootstrap e Javascript</span>
                    </p>

                    <button id="btn-see" onClick={redirectoClimaTemp}>Ver projeto &nbsp;<FontAwesomeIcon icon={faArrowRight} /> </button>
                </div>

                <div className="project">
                    <h5>Drsilva curriculu-web</h5>
                    <p>Esse é um modelo de currículu web bem semelhante a esse  sistema. 
                        No entanto, ele foi desenvolvido com as seguintes tecnologias:
                        <span>Html5, Css, Javascript e Bootstrap</span>
                    </p>
                    <button id="btn-see" onClick={redirectoCurriculu_web}>Ver projeto &nbsp;<FontAwesomeIcon icon={faArrowRight} /> </button>
                </div>
                <div className="project">
                    <h5>Drsilva Start</h5>
                    <p>
                        Um simples site desenvolvido em Wordpress. Aqui, o foco principal que 
                        resolvi demonstrar foi a minha habilidade com a escrita.
                    </p>
                    <button id="btn-see" onClick={redirectoWordPress}>Ver projeto &nbsp;<FontAwesomeIcon icon={faArrowRight} /> </button>
                </div>

                <div className="project">
                    <h5>Drsilva carta-profisional</h5>
                    <p>
                        Clique no botão abaixo para ver o escopo desse sistema no figma
                    </p>
                    <button id="btn-see" onClick={redirectToProjetct}>Ver projeto &nbsp;<FontAwesomeIcon icon={faArrowRight} /> </button>
                </div>
            </section>

        </div>
        
    );
};

export default Portfolio;