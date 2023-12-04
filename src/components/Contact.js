import React, { useState } from 'react'
import '../css/contactStyles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'


function Contact() {
  const initalValue = {
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  }
  const [ contactFormData, setContactFormData ] = useState(initalValue)

  function handleSubmit(e){
    e.preventDefault()
  }

  function handleChange(e){
    const { name, value } = e.target
    setContactFormData({
      ...contactFormData,
      [name]: value
    })
  }

  return (
    <div className='even'>
      <div id="contact" className='contain'>
        <h2>Contact Me</h2>
        <div id="contact-container">

          <div id="contact-text">
            <p>Lets get in touch! If you have any questions about me or my projects, please don't hesitate to send me message! You can also email me directly at <a href="mailto:kimberlymlove15@gmail.com">kimberlymlove15@gmail.com</a>. All fields are required!</p>

            <div id="socials">
              <a href='https://www.linkedin.com/in/kimberlymlove' target='_blank' rel="noreferrer" title="Go to Kim's LinkedIn">
                <FontAwesomeIcon className="social-icons" icon={faLinkedin}></FontAwesomeIcon>
              </a>
              <a href='https://github.com/Kmlove' target='_blank' rel="noreferrer" title="Go to Kim's GitHub">
                <FontAwesomeIcon icon={faGithub} className="social-icons"/>
              </a>
              <a href='https://medium.com/@kimberlymlove15' target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faMedium} className="social-icons" title="Go to Kim's blog on Medium"/>
              </a>
            </div>
          </div>  

          <form onSubmit={handleSubmit} id="contact-form">
            <div id='contact-form-name'>
              <div className='contact-names'>
                <label htmlFor='firstName'>First Name</label>
                <input type="text" name="firstName" id="firstName" required value={contactFormData.firstName} onChange={handleChange}/>
              </div>
              <div className='contact-names'>
                <label htmlFor='lastName'>Last Name</label>
                <input type="text" name="lastName" id="lastName" required value={contactFormData.lastName} onChange={handleChange}/>
              </div>
            </div>
            <label htmlFor='email'>Email</label>
            <input type="email" name="email" id="email" required value={contactFormData.email} onChange={handleChange}/>
            <label htmlFor='message'>Message</label>
            <textarea name="message" id="message" cols="30" rows="8" required value={contactFormData.message} onChange={handleChange}></textarea>
            <button type='submit'>Send Message!</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact