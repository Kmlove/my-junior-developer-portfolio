import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

function NavBar() {
  return (
    <Navbar >
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/aboutMe">About Me</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </Navbar>
  )
}

export default NavBar