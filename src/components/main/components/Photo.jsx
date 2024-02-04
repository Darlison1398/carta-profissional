import React, { useState, useEffect } from 'react';
import euImage from '../../../assets/img/eu.jpeg';

function Photo() {


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Atualizar a largura da tela quando a janela for redimensionada
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Adicionar ouvinte de redimensionamento
        window.addEventListener('resize', handleResize);

        // Remover o ouvinte ao desmontar o componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isSmallScreen = windowWidth <= 600;

    const photoStyle = {
        marginLeft: isSmallScreen ? 'auto' : '40px', backgroundColor: 'red',
    };


    

    return (
        <div className="container-photo">
            <figure class="image-block ml-auto" style={photoStyle}>
            	<img src={euImage} alt="Darlison Silva" />
            	<figcaption>
                    <p>
                        Darlison Silva, 25 anos, natural de Itaituba - PA, residente em Tubarão - SC.
                    </p>
            	</figcaption>
            </figure>

        </div>
    );
};

export default Photo;