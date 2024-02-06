import React, { useState, useEffect } from "react";
import ContainerStart from "./components/ContainerStart";
import Habilits from "./components/Habilits";
import Resume from "./components/Resume";
import HardSkills from "./components/HardSkills";
import Read from "./components/Read";
import Portfolio from "./components/Portfolio";
//import Usuals from "./components/Usuals";
import Zap from "./components/Zap";
import Photo from "./components/Photo";


function Main() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const renderPhoto = () => {
        if (windowWidth < 800) {
            return (
                <div className="photo-container">
                    <Photo />
                </div>
            );
        }
        return null;
    };



    return(
        <div className="container">
            {renderPhoto()}
            <ContainerStart />
            <Habilits />
            <Resume />
            <HardSkills />
            <Read />
            <Portfolio/>
            {/*<Usuals />*/}
            <Zap />
        </div>
    );
};

export default Main;