import React from 'react'
import PageHeader from '../components/PageHeader'
import { BsInfoCircleFill } from "react-icons/bs"
import { Animate } from 'react-simple-animate'
import { DiReact, DiNodejsSmall } from "react-icons/di"
import { FaDev, FaDatabase } from "react-icons/fa"

const personalDetails = [
    {
        label: "Name",
        value: "Anjali Singh"
    },
    {
        label: "Age",
        value: "27"
    },
    {
        label: "Address",
        value: "India"
    },
    {
        label: "Email",
        value: "anjalidelhi1509@gmail.com"
    },
    {
        label: "Contact No",
        value: "9354404228"
    },
]

const jobSummary = "The stimulus response learning model identifies habit learning as the key to understanding addiction.14 In classical learning theory, stimuli and responses are associated with outcomes, and the outcome determines the likelihood that the response will follow the stimulus in the future. In stimulus response learning, the outcome is less important, and the stimulus itself elicits a habitual response. Conditioned reinforcement and impulsivity are key features of this theory.15 This model predicts that users will describe drug taking as habitual or compulsive."

const About = () => {
    return (
        <section className='about'>
            <PageHeader headerText="about me" icon={<BsInfoCircleFill size={40} />} />
            <div className='about-content'>
                <div className='about-content-personal'>
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(-900px)"
                        }}
                        end={{
                            transform: "translateX(0px)"
                        }}
                    >
                        <h3>Full Stack Developer</h3>
                        <p>{jobSummary}</p>
                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(500px)"
                        }}
                        end={{
                            transform: "translateX(0px)"
                        }}
                    >
                        <h3 className='personal'>Personal Information</h3>
                        <ul>
                            {personalDetails.map((item) =>
                                <li>
                                    <span className='label'>{item.label}</span> : <span className='value'>{item.value}</span>
                                </li>
                            )}
                        </ul>
                    </Animate>
                </div>

                <div className='about-content-services'>
                <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(600px)"
                        }}
                        end={{
                            transform: "translateX(0px)"
                        }}
                    >
                    <div className='about-services-inner'>
                        <div className='d1'>
                            <DiReact size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div className='d2'>
                            <DiNodejsSmall size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div className='d3'>
                            <FaDev size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div className='d4'>
                            <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                    </div>
                    </Animate>
                </div>

            </div>
        </section>
    )
}

export default About
