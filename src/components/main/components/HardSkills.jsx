import { useLayoutEffect } from "react";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faUsersGear, faLaptop, faBusinessTime, faPersonHarassing, faUserGear  } from '@fortawesome/free-solid-svg-icons';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

function HardSkills() {

    
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect( () => {
        gsap.to(".sk", {
            y:0,
            opacity: 1, 
            scrollTrigger: {
                trigger: ".sk",
                //markers:true,
                start: "top 650px",
                end: "bottom 500px",
                scrub: true,
            }
        })
        
        return () => {
            gsap.killTweensOf(".sk")
        }
    }, []);
    

    return (
        <div className="container mt-5 text-center" id="container">
            <h3>HardSkills</h3>

            <section className="skills text-center">
                <div className="sk">
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
                    <span>Informática</span>
                </div>

                <div className="sk">
                    <div className="cont-i">
                        <FontAwesomeIcon icon={faUserGear} id="icone" />
                    </div>
                    <span>Adaptabilidade</span>
                </div>

                <div className="sk">
                    <div className="cont-i">
                        <FontAwesomeIcon icon={faPersonHarassing} id="icone" />
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