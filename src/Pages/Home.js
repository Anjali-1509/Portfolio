import React from 'react'
import { Link } from 'react-router-dom'
import { Animate } from "react-simple-animate"
import { GrLinkedin } from "react-icons/gr"
import { BsGithub } from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import { useState } from 'react'
import { jsPDF } from "jspdf";


const Home = () => {
const [saving, setSaving]= useState(false)

  const saveResume=()=>{
   setSaving(true)
   let doc= new jsPDF("portrait", "px","a4", false)
   doc.addImage("https://i.ibb.co/Xy3xcKK/Anjali-s-Resume-1-1.png", "PNG",0, 0,417,653)
   doc.save("resume.pdf")
   setSaving(false)
  }

   return (
      <section id='home' className='home'>
         <div className='home-text-wrapper'>
            <h1>
               Hello, I am Anjali
               <br />
               Full stack Developer
            </h1>
            <Animate
               play
               duration={1.5}
               delay={1}
               start={{
                  transform: "translateY(550px)"
               }}
               end={{
                  transform: "translateX(0px)"
               }}
            >
               <Link to="/contact"><button  className='home-button'>CONTACT ME</button></Link>
               <button onClick={saveResume}  className='home-button'>DOWNLOAD RESUME</button>

            </Animate>

            <Animate
               play
               duration={1.5}
               delay={1}
               start={{
                  transform: "translateY(550px)"
               }}
               end={{
                  transform: "translateX(0px)"
               }}
            >
               <div style={{ marginTop: "30px", display: "flex", justifyContent: "space-between", width: "140px", margin: "auto" }}>
                  <GrLinkedin size={40} color="var(--yellow-theme-main-color)" />
                  <BsGithub size={40} color="var(--yellow-theme-main-color)" />
                  <AiFillInstagram size={42} color="var(--yellow-theme-main-color)" />
               </div>
            </Animate>

         </div>
      </section>
   )
}

export default Home
