import React, { useState } from 'react'
import '../css/contactStyles.css'
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
    <div id="contact">
      <h2>Contact Me</h2>
      <p>Lets get in touch! If you have any questions about me or my projects, please don't hesitate to send me message! You can also email me directly at <a href="mailto:kimberlymlove15@gmail.com">kimberlymlove15@gmail.com</a>. All fields are required!</p>

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

      <div id="socials">
        <a href='https://www.linkedin.com/in/kimberlymlove' target='_blank'>
          <FontAwesomeIcon className="social-icons" icon={faLinkedin}></FontAwesomeIcon>
        </a>
        <a href='https://github.com/Kmlove' target='_blank'>
          <FontAwesomeIcon icon={faGithub} className="social-icons"/>
        </a>
        <a href='https://medium.com/@kimberlymlove15' target='_blank'>
          <FontAwesomeIcon icon={faMedium} className="social-icons"/>
        </a>
      </div>
    </div>
  )
}

export default Contact