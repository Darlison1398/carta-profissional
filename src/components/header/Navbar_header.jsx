import { useState } from 'react';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBootstrap from 'react-bootstrap/Navbar';  // Renomeei para NavbarBootstrap
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Ícones sólidos
import { faInstagram, faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import ModalG from './ModalG';


function Navbar_header() {  // Renomeei a função para MeuNavbar


  const navbar = {
    display: 'flex',
    justifyContent: 'flex-start',  // Alinhamento à esquerda
    justifyContent: 'space-between',
    backgroundColor: '#4B627D',
  };


  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div>
      <NavbarBootstrap expand="lg" className="justify-content-between" style={navbar}>
        <Container>
          <NavbarBootstrap.Brand href="#home">Darlison Silva</NavbarBootstrap.Brand>
          <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
          <NavbarBootstrap.Collapse id="basic-navbar-nav">
            <Nav className="me-auto left">
              <Nav.Link href="#">Home</Nav.Link>

              <Nav.Link href="#" onClick={handleShow}>Projeto</Nav.Link>
              <ModalG show={showModal} handleClose={handleClose} />


              <NavDropdown title="Contatos" id="basic-nav-dropdown" style={{ margin: 0, padding: 0 }}>
                <div className="contatos" style={{ margin: 0, padding: 0 }}>    
                  <NavDropdown.Item href="#action/3.1"> 
                    <FontAwesomeIcon icon={faPhone} /> &nbsp;Fale comigo
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item href="#action/3.2">
                    <FontAwesomeIcon icon={faWhatsapp} /> &nbsp;Me chame no zap
                  </NavDropdown.Item>
  
                  <NavDropdown.Item href="#action/3.2">
                    <FontAwesomeIcon icon={faEnvelope} /> &nbsp;Me envie um Email
                  </NavDropdown.Item>
  
                  <NavDropdown.Item href="#action/3.3">
                    <FontAwesomeIcon icon={faLinkedin} /> &nbsp;Visite meu Linkedin
                  </NavDropdown.Item>
  
                  <NavDropdown.Item href="#action/3.3">
                    <FontAwesomeIcon icon={faGithub} /> &nbsp; Conheça meus projetos
                  </NavDropdown.Item>
  
                  <NavDropdown.Item href="#action/3.3">
                    <FontAwesomeIcon icon={faInstagram} /> &nbsp; Siga-me no Instagram
                  </NavDropdown.Item>
  
                </div>
              </NavDropdown>
            </Nav>
          </NavbarBootstrap.Collapse>
        </Container>
      </NavbarBootstrap>
    </div>
  );
}

export default Navbar_header;
