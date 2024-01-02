function Footer() {

    const foot = {
        display: 'flex',
        justifyContent: 'flex-start',  // Alinhamento à esquerda
        justifyContent: 'space-between',
        backgroundColor: '#4B627D',
        textAlign: 'center',
        color: '#FFF',
      };

    return (
        <div className="container-footer" style={foot}>
            <p>&copy;Darlison Silva</p>
        </div>
    );
};

export default Footer;