import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Zap() {
    return (
        <div className="container-zap">
            <h4>E ai, vamos conversar?</h4>
            
            <button>Me chame no whatsapp &nbsp; <FontAwesomeIcon icon={faWhatsapp} /> </button>
        </div>

    );
};

export default Zap;