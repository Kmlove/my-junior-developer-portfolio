import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'
import Aboutme from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import Skills from './Skills'

function MainPage() {
  return (
    <>
      <NavBar />
      <div id="main-container">
        <Home />
        <Aboutme />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default MainPage