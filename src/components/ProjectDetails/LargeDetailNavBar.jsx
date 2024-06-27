import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function LargeDetailNavBar({ KLlogo }) {
  return (
    <Navbar id="large-nav">
      <Link to="/#home">
        <div id="KLlogo">
          <img src={KLlogo} alt="Kimberly Love Logo" />
        </div>
      </Link>
      <Nav variant="underline">
        <Nav.Item>
          <Link to="/#home">Home</Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default LargeDetailNavBar;
