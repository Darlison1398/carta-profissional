import React, { useState, useEffect } from "react";
import AbouMe from "./AboutMe";
import Redes from "./Redes";
import euImage from '../../../assets/img/eu.jpeg';

function ContainerStart() {
    const mr = { 
        backgroundColor: '#efefef', 
        justifyContent: 'center',
        textAlign: 'center',
        overflowX: 'hidden',
        boxSizing: 'border-box',
        padding: '10px'
    };

    const rowStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        overflowX: 'hidden'
    };

    const bb = { marginBottom: '1em',};        

    const colStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
    };

    const photoStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        // Limpeza do evento ao desmontar o componente
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Renderiza condicionalmente com base no tamanho da tela
    const renderImageSection = () => {
        if (windowWidth < 800) {
            return null; // Não renderiza a seção da imagem se a tela for menor que 800px
        }

        return (
            <div className="col-12 col-md-5" style={colStyle}>                              
                <figure className="image-block ml-auto">
                    <img src={euImage} alt="Darlison Silva" style={photoStyle} />
                    <figcaption>
                        <p>
                            Darlison Silva, 25 anos, natural de Itaituba - PA, residente em Tubarão - SC.
                        </p>
                    </figcaption>
                </figure>
            </div>
        );
    };

    return (
        <div className="container mx-auto cont-start" style={mr}>
            <div className="row d-flex align-items-center justify-content-center justify-content-between ct" style={rowStyle}>
               
                <div className="col-12 col-md-5" >
                    <div className="box-cont d-flex flex-column justify-content-between">
                         <div style={bb} className="mb-auto">
                             <AbouMe />
                         </div>
                         <div style={bb}>
                             <Redes />
                         </div>
                    </div>
                </div>

                {renderImageSection()}

            </div>   
        </div>
    );
}

export default ContainerStart;
