import React from 'react'
import { BsInfoCircleFill } from "react-icons/bs"
import PageHeader from '../components/PageHeader'
import { Animate } from "react-simple-animate"
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wp65b79', 'template_1eap48w', form.current, 'dwAL0EYIBZ7-SkHWf')
      .then((result) => {
        console.log(result.text);
        toast.success("email has been sent successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      }, (error) => {
        console.log(error.text);
      });
  };


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
          <form ref={form} onSubmit={sendEmail} className='contact-form'>
            <div className='contact-form-wrapper'>

              <input type="text" placeholder='Name' name="user_name" className='inputName' />

              <input type="email" placeholder='Email' name="user_email" className='inputEmail' />

              <textArea name="message" className='inputDesc' placeholder="Message" type={"text"} rows="5" />

            </div>
            <input className='contact-button' type="submit" value="Send" />
          </form>

        </Animate>

      </div>
    </section>
  )
}

export default Contact
