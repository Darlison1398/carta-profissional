function AbouMe() {
    const me = {
        textAlign: 'left',
    }
    return (
        <div className="about-me" style={me}>
            <h3>Sobre mim</h3>
            <p>
                Apresento-lhe meu site pessoal/profissional, onde compartilho informações sobre 
                mim, meus projetos, habilidades pessoais, entre outros aspectos. Sou uma pessoa 
                dinâmica, comunicativa e trabalho bem em equipe. Possuo habilidades em 
                informática, desenvolvimento front-end e back-end, design web, banco de dados, 
                testes, Linux, suporte técnico, atendimento ao público e também tenho 
                experiência com metodologias ágeis, como o Scrum.
            </p>
        </div>
    );
};

export default AbouMe;