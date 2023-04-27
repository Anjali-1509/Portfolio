import React from 'react'
import { Link } from 'react-router-dom'
import { Animate } from "react-simple-animate"

const Home = () => {
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
               <Link to="/contact"><button className='home-button'>click me</button></Link>
            </Animate>
         </div>
      </section>
   )
}

export default Home
