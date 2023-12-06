import React from 'react'
import Home from './Home'
import NavBar from './NavBar'
import Aboutme from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import Skills from './Skills'
import Blog from './Blog'

function MainPage() {
  return (
    <>
      <NavBar />
      <div id="main-container">
        <Home />
        <Aboutme />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default MainPage