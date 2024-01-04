import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faUsersGear, faLaptop, faBusinessTime  } from '@fortawesome/free-solid-svg-icons';

function HardSkills() {

    {/*
        ícone pessoas em grupo
        <FontAwesomeIcon icon="fa-solid fa-people-group" />

        gestão de tempo
        <FontAwesomeIcon icon="fa-solid fa-person-arrow-up-from-line" />

        facilidade com tecnologia
        <FontAwesomeIcon icon="fa-solid fa-user-gear" />
    */}

    return (
        <div className="container mt-5 text-center" id="container">
            <h3>HardSkills</h3>

            <section className="skills">
                <div className="sk" >
                    <div className="cont-i">
                        <FontAwesomeIcon icon={faBullhorn} id="icone" />
                    </div>
                    <span>Boa comunicação</span>
                </div>

                <div className="sk">
                    <div className="cont-i">
                        <FontAwesomeIcon icon={faUsersGear} id="icone" />
                    </div>
                    <span>Trabalho em equipe</span>
                </div>

                <div className="sk">
                    <div className="cont-i">
                        <FontAwesomeIcon icon= {faLaptop} id="icone" />
                    </div>
                    <span>Facilidade com tecnologia</span>
                </div>

                <div className="sk">
                    <div className="cont-i"></div>
                    <span>Adaptabilidade</span>
                </div>

                <div className="sk">
                    <div className="cont-i">

                    </div>

                    <span>Inglês intermediário</span>
                </div>

                <div className="sk">
                    <div className="cont-i">
                        <FontAwesomeIcon icon={faBusinessTime} id="icone" />
                    </div>
                    <span>Gestão de tempo</span>
                </div>
            </section>
        </div>
    );
};

export default HardSkills;