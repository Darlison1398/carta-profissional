import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Zap() {
    return (
        <div className="container mt-5 text-center mb-5">
            <h4>E ai, vamos conversar?</h4>
            
            <button className="btn-zap">Me chame no whatsapp &nbsp; <FontAwesomeIcon icon={faWhatsapp} /> </button>
        </div>

    );
};

export default Zap;