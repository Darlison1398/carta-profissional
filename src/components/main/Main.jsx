import ContainerStart from "./components/ContainerStart";
import Habilits from "./components/Habilits";
import Resume from "./components/Resume";
import HardSkills from "./components/HardSkills";
import Read from "./components/Read";
import Portfolio from "./components/Portfolio";
//import Usuals from "./components/Usuals";
import Zap from "./components/Zap";


function Main() {
    return(
        <div className="container">
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