import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import redirectToWhats from '../../../assets/js/redirect/redirectToWhats';

function Zap() {
    return (
        <div className="container mt-5 text-center mb-5">
            <h4>E ai, vamos conversar?</h4>
            <button className="btn-zap" onClick={redirectToWhats}>Me chame no whatsapp&nbsp; <FontAwesomeIcon icon={faWhatsapp} id="icon-zap"/> </button>
        </div>

    );
};

export default Zap;