import React from 'react'
import {BsInfoCircleFill} from "react-icons/bs"
import PageHeader from '../components/PageHeader'
import {Animate} from "react-simple-animate"

const Contact = () => {
  return (
    <section className='contact'>
    <PageHeader headerText="my contact" icon={<BsInfoCircleFill size={40} />} />

     <div className="contact-content">
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
     <h3 className='contact-header'>Lets Talk</h3>
     </Animate>

     <Animate
         play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateX(-1600px)"
        }}
        end={{
          transform: "translateX(0px)"
        }}
     >
        <div className='contact-form'>
          <div className='contact-form-wrapper'>

            <div className='nameWrapper'>
              <input name="name" className='inputName' type={"text"}/>
              <label htmlFor='name' className='nameLabel'>Name</label>
            </div>

            <div className='emailWrapper'>
              <input name='email' className='inputEmail' type={"email"}/>
              <label htmlFor='email' className='emailLabel'>Email</label>
            </div>

            <div className='descWrapper'>
              <textArea name='description' className='inputDesc' type={"text"} rows="5"/>
              <label htmlFor='description' className='descLabel'>Description</label>
            </div>

          </div>
          <button className='contact-button'>SUBMIT</button>
        </div>

     </Animate>

    </div>
    </section>
  )
}

export default Contact
