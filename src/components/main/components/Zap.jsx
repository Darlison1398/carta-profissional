//import { useLayoutEffect } from "react";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import redirectToWhats from '../../../assets/js/redirect/redirectToWhats';
//import {gsap} from "gsap";
//import {ScrollTrigger} from "gsap/ScrollTrigger";

function Zap() {

    /*gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect( () => {
        gsap.to(".btn-zap", {
            y:0,
            opacity: 1, 
            scrollTrigger: {
                trigger: ".animation",
                //markers:true,
                start: "top 600px",
                end: "botton 500px",
                scrub: true,
            }
        })
        
        return () => {
            gsap.killTweensOf(".btn-zap")
        }
    }, []);*/
    
    return (
        <div className="container mt-5 text-center mb-5">
            <div className="animation"> 
                 <h4>E ai, vamos conversar?</h4>
                 <button className="btn-zap" onClick={redirectToWhats}>Me chame no whatsapp&nbsp; <FontAwesomeIcon icon={faWhatsapp} id="icon-zap"/> </button>
            </div>
        </div>

    );
};

export default Zap;