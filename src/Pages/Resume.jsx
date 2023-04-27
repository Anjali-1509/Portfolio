import React from 'react'
import {BsInfoCircleFill} from "react-icons/bs"
import PageHeader from '../components/PageHeader'
import {GiBookmarklet} from "react-icons/gi"

const Resume = () => {
  return (
    <section className='resume'>
    <PageHeader headerText="my resume" icon={<BsInfoCircleFill size={40} />} />

    <div className='resume-div'>

       <div>
          <GiBookmarklet className='resume-icon1' size={60} color="var(--yellow-theme-main-color)" />
          <div className='edu-card1'>
          
           <h2>gdjfhdgj</h2>

          </div>

          <div className='edu-card3'>
          <GiBookmarklet className='resume-icon1' size={60} color="var(--yellow-theme-main-color)" /> 
          </div>
       </div>

       <div>
          <div className='edu-card2'>
          <GiBookmarklet className='resume-icon2' size={60} color="var(--yellow-theme-main-color)" />
          </div>
       </div>
    </div>
    </section>
  )
}

export default Resume
