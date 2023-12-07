import React, { useState } from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import '../css/navBarStyles.scss'

function SmallNavBar({KLlogo}) {
    
    const [expanded, setExpanded] = useState(false);

    const handleNavbarToggle = () => {
        setExpanded(!expanded);
    };
    
    const handleNavLinkClick = () => {
        setExpanded(false);
    };


    return (
        <Navbar expanded={expanded} expand="lg" id="small-nav">
            <Navbar.Brand href="#home"><div id="KLlogo"><img src={KLlogo} alt='Kimberly Love Logo' /></div></Navbar.Brand>
            <Navbar.Toggle onClick={handleNavbarToggle} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto text-end">
                    <Nav.Link onClick={handleNavLinkClick} href="#home">Home</Nav.Link>
                    <Nav.Link onClick={handleNavLinkClick} href="#aboutMe">About Me</Nav.Link>
                    <Nav.Link onClick={handleNavLinkClick} href="#skills">Skills</Nav.Link>
                    <Nav.Link onClick={handleNavLinkClick} href="#projects">Projects</Nav.Link>
                    <Nav.Link onClick={handleNavLinkClick} href="#blogSection">Blog</Nav.Link>
                    <Nav.Link onClick={handleNavLinkClick} href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}

export default SmallNavBar