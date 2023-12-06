import React, { useState, useEffect } from 'react'
import { Navbar, Nav, NavDropdown} from 'react-bootstrap'
import '../css/navBarStyles.scss'
import KLlogo from '../images/Kimberly-Love-Logo-Color-Zoomed.png'
import LargeNavbar from './LargeNavbar'
import SmallNavBar from './SmallNavBar'

function NavBar() {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setViewportWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
        <>
            {viewportWidth > 630 ? <LargeNavbar /> : <SmallNavBar />}
            {/* Your other components */}
        </>
    )
}

export default NavBar