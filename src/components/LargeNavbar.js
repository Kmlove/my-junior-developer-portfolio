import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../css/navBarStyles.scss";

function LargeNavbar({ KLlogo }) {
  return (
    <Navbar id="large-nav">
      <Nav variant="underline" className="nav-scoped">
        <div clasName="logo-wrapper">
        <Nav.Item>
          <Nav.Link eventKey="#home" href="#home" style={{borderBottomColor: 'transparent'}}>
            <div id="KLlogo">
              <img src={KLlogo} alt="Kimberly Love Logo" />
            </div>
          </Nav.Link>
        </Nav.Item>
        </div>
        <div className='navlinks-wrapper'>
        <Nav.Item>
          <Nav.Link eventKey="#home" href="#home">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="#aboutMe" href="#aboutMe">
            About Me
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="#skills" href="#skills">
            Skills
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="#projects" href="#projects">
            Projects
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="#blogSection" href="#blogSection">
            Blog
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="#contact" href="#contact">
            Contact
          </Nav.Link>
        </Nav.Item>
        </div>
      </Nav>
    </Navbar>
  );
}

export default LargeNavbar;
