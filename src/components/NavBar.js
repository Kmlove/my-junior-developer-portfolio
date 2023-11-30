import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import '../css/navBarStyles.css'

function NavBar() {
  return (
    <Navbar >
        <h3>KL</h3>
        <Nav variant="underline" defaultActiveKey="#home">
            <Nav.Item>
                <Nav.Link eventKey="#home" href="#home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="#aboutMe" href="#aboutMe">About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="#skills" href="#skills">Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="#projects" href="#projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="#blogSection" href="#blogSection">Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="#contact" href="#contact">Contact</Nav.Link>
            </Nav.Item>
        </Nav>
    </Navbar>
  )
}

export default NavBar