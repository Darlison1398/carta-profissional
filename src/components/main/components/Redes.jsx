import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Redes() {
    const contt = {
        backgroundColor: '#A7A4A4',
        borderRadius: '20px',
        padding: '10px'
    }
    
    const iconStyle = {
        color: '#fff',
        transition: 'color 0.3s, transform 0.3s',  // Adicionando transição de cor e transformação
    };

    
    return (
        <div className="container text-center d-flex flex-column align-items-center justify-content-center" style={contt}>
            <div>
                <h5>Redes de contatos</h5>
            </div>
            <div className="redes d-flex justify-content-between mt-2">
                <FontAwesomeIcon icon={faWhatsapp} className="redes-icon"/>
                <FontAwesomeIcon icon={faLinkedin} className="redes-icon"/>
                <FontAwesomeIcon icon={faGithub} className="redes-icon"/>
                <FontAwesomeIcon icon={faInstagram} className="redes-icon"/>

            </div>
        </div>
    );
};

export default Redes;