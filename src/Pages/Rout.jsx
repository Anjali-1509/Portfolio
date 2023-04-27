import React from 'react'
import {Routes,Route} from "react-router-dom"
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Projects from './Projects'
import Resume from './Resume'
import Skills from './Skills'

const Rout = () => {
  return (
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/resume" element={<Resume />} />
       <Route path="/skills" element={<Skills />} />
       <Route path="/projects" element={<Projects />} />
       <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default Rout
