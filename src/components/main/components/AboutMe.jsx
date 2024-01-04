function AbouMe() {
    const me = {
        textAlign: 'left',
    }
    return (
        <div className="about-me" style={me}>
            <h3>Sobre mim</h3>
            <p>
                Apresento-lhe o meu currículo o qual contém algumas informações a meu 
                respeito. Sou uma pessoa dinâmica, possuo boa comunicação e sei 
                trabalhar em equipe. Tenho habilidades com informática, desenvolvimento 
                front-end, experiência como suporte técnico, desenvolvimento back-end, 
                testes, atendimento ao público e metodologias ágeis (Scrum).
            </p>
        </div>
    );
};

export default AbouMe;