import ContainerStart from "./components/ContainerStart";
import Habilits from "./components/Habilits";
import Resume from "./components/Resume";
import HardSkills from "./components/HardSkills";
import Read from "./components/Read";
import Portfolio from "./components/Portfolio";
import Zap from "./components/Zap";

function Main() {
    return(
        <div className="container">
            <ContainerStart />
            <br />
            <br />
            <Habilits />
            <br />
            <Resume />
            <br />
            <HardSkills />
            <br />
            <Read />
            <br />
            <Portfolio/>
            <br />
            <Zap />
        </div>
    );
};

export default Main;