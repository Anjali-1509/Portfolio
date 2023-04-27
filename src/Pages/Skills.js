import React from 'react'
import PageHeader from '../components/PageHeader'
import { BsInfoCircleFill } from "react-icons/bs"
import { FaHtml5 } from "react-icons/fa"
import { DiCss3 } from "react-icons/di"
import { SiJavascript, SiExpress,SiRedux, SiMongodb, SiBootstrap, SiChakraui } from "react-icons/si"
import { IoLogoNodejs } from "react-icons/io"
import { GrReactjs } from "react-icons/gr"
import { BsFiletypeScss } from "react-icons/bs"
import { Animate } from 'react-simple-animate'



const skillsData = [
  { icon: <FaHtml5 />, label: "HTML" },
  { icon: <DiCss3 />, label: "CSS" },
  { icon: <SiJavascript />, label: "Javascript" },
  { icon: <IoLogoNodejs />, label: "Node" },
  { icon: <SiExpress />, label: "Express" },
  { icon: <SiMongodb />, label: "Mongo" },
  { icon: <GrReactjs />, label: "React" },
  { icon: <SiRedux />, label: "Redux" },
  { icon: <SiBootstrap />, label: "Bootstrap" },
  { icon: <SiChakraui />, label: "Chakra UI" },

]

const Skills = () => {
  return (
    <section className='skills'>
      <PageHeader headerText="my skills" icon={<BsInfoCircleFill size={40} />} />

      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateX(900px)"
        }}
        end={{
          transform: "translateX(0px)"
        }}
      >
        <div className='skills-content'>
          {
            skillsData.map((item) =>
              <>
                <div>
                  <i className='icon'>{item.icon}</i>
                  <h2>{item.label}</h2>
                </div>
              </>
            )
          }
        </div>
      </Animate>

    </section>
  )
}

export default Skills
