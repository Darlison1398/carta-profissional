import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import redirectToGitHub from '../../../assets/js/redirect/redirectToGitHub';
import redirectToInstagram from '../../../assets/js/redirect/redirectToInstagram';
import redirectToLinkedIn from '../../../assets/js/redirect/redirectToLinkedIn';
import redirectToWhats from '../../../assets/js/redirect/redirectToWhats';

function Redes() {
    const contt = {
        backgroundColor: '#1759a8',
        borderRadius: '20px',
        padding: '10px'
    }
    
    const iconStyle = {
        color: '#fff',
        transition: 'color 0.3s, transform 0.3s', 
    };


    return (
        <div className="container text-center d-flex flex-column align-items-center justify-content-center" style={contt}>
            <div>
                <h5>Redes de contatos</h5>
            </div>
            <div className="redes d-flex justify-content-between mt-2">
                <FontAwesomeIcon icon={faWhatsapp} className="redes-icon" onClick={redirectToWhats} />
                <FontAwesomeIcon icon={faLinkedin} className="redes-icon" onClick={redirectToLinkedIn} />
                <FontAwesomeIcon icon={faGithub} className="redes-icon" onClick={redirectToGitHub} />
                <FontAwesomeIcon icon={faInstagram} className="redes-icon" onClick={redirectToInstagram} />
            </div>
        </div>
    );
};

export default Redes;