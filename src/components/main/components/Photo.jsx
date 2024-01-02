import React from 'react';
import euImage from '../../../assets/img/eu.jpeg';

// Agora você pode usar a variável euImage para a referência à imagem.

function Photo() {
    const photo = {whidth: '400px', height: '500px'}
    return (
        <div className="container-photo">
            <div className="main-ft">
                <img src={euImage} alt="Darlison Silva" style={photo} />
            </div>
            <p>
                Darlison de Souza Silva, 25 anos, natural de Itaituba- Pa, 
                residente em Tubarão-SC
            </p>
        </div>
    );
};

export default Photo;