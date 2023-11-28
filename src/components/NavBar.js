import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav} from 'react-bootstrap'

function NavBar() {
  return (
    <Navbar >
        <Nav variant="underline" defaultActiveKey="#home">
            <h3>KL</h3>
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
                <Nav.Link eventKey="#blog" href="#blog">Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="#contact" href="#contact">Contact</Nav.Link>
            </Nav.Item>
        </Nav>
    </Navbar>
  )
}

export default NavBar