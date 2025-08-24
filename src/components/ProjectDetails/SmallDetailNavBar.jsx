import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function SmallDetailNavBar({ KLlogo }) {
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar expanded={expanded} expand="lg" id="small-nav">
      <Link to="/#home">
        <div id="KLlogo">
          <img src={KLlogo} alt="Kimberly Love Logo" />
        </div>
      </Link>
      <Navbar.Toggle
        onClick={handleNavbarToggle}
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto text-end">
          <Link onClick={handleNavLinkClick} to="/#home" style={{textDecoration: 'none'}}>
            Home
          </Link>
          <Link onClick={handleNavLinkClick} to="/#projects" style={{textDecoration: 'none'}}>
            Back to Projects
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default SmallDetailNavBar;
