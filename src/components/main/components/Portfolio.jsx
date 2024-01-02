import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Portfolio() {
    return (
        <div className="container-port">
            <h3>Portfólio pessoal</h3>

            <section className="container-box">
                <div className="project">
                    <h4>Drsilva clima-temp</h4>
                    <p>
                        Esse projeto é um sistema web onde é possível consultar o clima atual
                        de uma determinada cidade. Ele é um projeto simples onde eu criei apenas
                        para consumir um api e exibir os dados para o usuário. Nele, eu usei as
                        seguintes tecnologias: <span>Html5, Css3, Bootstrap e Javascript</span>
                    </p>

                    <button id="btn-see">Ver projeto &nbsp;<FontAwesomeIcon icon={faArrowRight} /> </button>
                </div>

                <div className="project">
                    <h4>Drsilva curriculu-web</h4>
                    <p>Esse é um modelo de currículu web bem semelhante a esse  sistema. 
                        No entanto, ele foi desenvolvido com as seguintes tecnologias:
                        <span>Html5, Css, Javascript e Bootstrap</span>
                    </p>
                    <button id="btn-see">Ver projeto &nbsp;<FontAwesomeIcon icon={faArrowRight} /> </button>
                </div>
                <div className="project">
                    <h4>Drsilva Start</h4>
                    <p>
                        Um simples site desenvolvido em Wordpress. Aqui, o foco principal que 
                        resolvi demonstrar foi a minha habilidade com a escrita.
                    </p>
                    <button id="btn-see">Ver projeto &nbsp;<FontAwesomeIcon icon={faArrowRight} /> </button>
                </div>

                <div className="project">
                    <h4>Drsilva carta-profisional</h4>
                    <p>
                        Clique no botão abaixo para ver o escopo desse sistema no figma
                    </p>
                    <button id="btn-see">Ver projeto &nbsp;<FontAwesomeIcon icon={faArrowRight} /> </button>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;