import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'
import Aboutme from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'

function MainPage() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/aboutMe' element={<Aboutme />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      
    </>
  )
}

export default MainPage