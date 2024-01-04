import React from "react";
import AbouMe from "./AboutMe";
import Photo from "./Photo";
import Redes from "./Redes";

function ContainerStart() {
    const mr = {marginTop: '1em', 
    backgroundColor: '#efefef', 
    justifyContent: 'center',
    textAlign: 'center'
    };
    const bb = { marginBottom: '1em',};
    return(
        <div className="container mx-auto" style={mr}>
            <div className="row d-flex align-items-center justify-content-center justify-content-between">
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

                <div className="col-md-5 photo">
                    <Photo/>
                </div>
            </div>   
        </div>
    );
};

export default ContainerStart;