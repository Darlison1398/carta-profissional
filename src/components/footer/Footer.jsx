function Footer() {

    const foot = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60px',
        backgroundColor: '#4B627D',
        textAlign: 'center',
        color: '#FFF',
      };

    return (
        <div className="container-footer" style={foot}>
            <div>
                <p className="text-center">&copy;Darlison Silva</p>
            </div>
        </div>
    );
};

export default Footer;