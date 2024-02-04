import React from "react";
import AbouMe from "./AboutMe";
import Photo from "./Photo";
import Redes from "./Redes";

function ContainerStart() {
    const mr = {marginTop: '1em', 
    backgroundColor: '#efefef', 
    justifyContent: 'center',
    textAlign: 'center',
    overflowX: 'hidden',
    boxSizing: 'border-box',
    };

    const rowStyle = {
        display: 'flex',
        flexWrap: 'wrap', // Permite que os itens se ajustem à largura da tela
        alignItems: 'center',
        justifyContent: 'center',
        overflowX: 'hidden'
    };

    const bb = { marginBottom: '1em',};

    return(
        <div className="container mx-auto cont-start" style={mr}>
            <div className="row d-flex align-items-center justify-content-center justify-content-between" style={rowStyle}>
                <div className="col-md-5">
                    <div className="box-cont d-flex flex-column justify-content-between">
                         <div style={bb} className="mb-auto">
                             <AbouMe />
                         </div>
                         <div style={bb}>
                             <Redes />
                         </div>
                    </div>
                </div>

                <div className="col-md-5">
                    <Photo/>
                </div>
            </div>   
        </div>
    );
};

export default ContainerStart;