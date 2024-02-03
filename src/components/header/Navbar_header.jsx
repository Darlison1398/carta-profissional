import React, { useState, useEffect  } from 'react';
//import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBootstrap from 'react-bootstrap/Navbar';  // Renomeei para NavbarBootstrap
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Ícones sólidos
import { faInstagram, faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ModalG from './ModalG';
import redirectToGitHub from '../../assets/js/redirect/redirectToGitHub';
import redirectToInstagram from '../../assets/js/redirect/redirectToInstagram';
import redirectToLinkedIn from '../../assets/js/redirect/redirectToLinkedIn';
import redirectToWhats from '../../assets/js/redirect/redirectToWhats';

function Navbar_header() {  // Renomeei a função para MeuNavbar

  const logo = {color: '#FFF', fontSize: '18pt'};

  const navDropdownStyle =  {
    padding: '0',
    margin: '0',
    color: '#FFF',
  }

  const navbar = {
    display: 'flex',
    //justifyContent: 'flex-start',  // Alinhamento à esquerda
    justifyContent: 'space-between',
    backgroundColor: '#003660',
    color: '#FFF',
  };

  //const tx = {backgroundColor:'red'};

  const bbb = {color: '#FFF', marginLeft: 'auto'};

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);



  return (
    <div>
      <NavbarBootstrap expand="lg" className="justify-content-between" style={navbar}>
        <Container>

          <NavbarBootstrap.Brand href="#home" style={logo}>Darlison Silva</NavbarBootstrap.Brand>
         
          <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />

          <NavbarBootstrap.Collapse id="basic-navbar-nav">
            <Nav className='justify-content-end' style={bbb}>

              <NavDropdown title="Contatos" id="basic-nav-dropdown" style={navDropdownStyle}>
                <div className="contatos" style={{ margin: 0, padding: 0 }}>    
                  <NavDropdown.Item href="#action/3.1"> 
                    <FontAwesomeIcon icon={faPhone} style={{color: "#d53939", fontSize: "16pt"}} /> &nbsp;Fale comigo
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item onClick={redirectToWhats}>
                    <FontAwesomeIcon icon={faWhatsapp} style={{color: "#6cf54e", fontSize: "16pt"}}/> &nbsp;Me chame no zap
                  </NavDropdown.Item>
  
                  <NavDropdown.Item href="#action/3.2">
                    <FontAwesomeIcon icon={faEnvelope} style={{color: "hsl(60, 94%, 60%)", fontSize: "16pt"}} /> &nbsp;Me envie um Email
                  </NavDropdown.Item>
  
                  <NavDropdown.Item onClick={redirectToLinkedIn}>
                    <FontAwesomeIcon icon={faLinkedin} style={{color: "#508ef9", fontSize: "16pt"}} /> &nbsp;Visite meu Linkedin
                  </NavDropdown.Item>
  
                  <NavDropdown.Item onClick={redirectToGitHub}>
                    <FontAwesomeIcon icon={faGithub} style={{color: "#6B4444", fontSize: "16pt"}} /> &nbsp;Conheça meus projetos
                  </NavDropdown.Item>
  
                  <NavDropdown.Item onClick={redirectToInstagram}>
                    <FontAwesomeIcon icon={faInstagram} style={{color: "#fa39a3", fontSize: "16pt"}} /> &nbsp;Siga-me no Instagram
                  </NavDropdown.Item>
  
                </div>
              </NavDropdown>

              <Nav.Link href="#" onClick={handleShow} style={{color: '#FFF'}}>Projeto</Nav.Link>
              <ModalG show={showModal} handleClose={handleClose} />
              <Nav.Link href="#" style={{color: '#FFF'}}>Mais...</Nav.Link>

            </Nav>
          </NavbarBootstrap.Collapse>

        </Container>
      </NavbarBootstrap>
    </div>
  );
}

export default Navbar_header;
