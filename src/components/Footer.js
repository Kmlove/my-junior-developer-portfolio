import React from 'react'
import "../css/footerStyles.scss"
import KLlogo from '../images/Kimberly-Love-Logo-Color-Zoomed.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons"

function Footer() {
  return (
    <footer>
      <div>
        <img style={{height: "60px"}} src={KLlogo} alt='Kimberly Love Logo' />
      </div>

      <div>
        <p>&copy; 2023 Kimberly Love</p>
      </div>

      <div id="footer-socials">
        <a href='https://www.linkedin.com/in/kimberlymlove' target='_blank' rel="noreferrer" title="Go to Kim's LinkedIn">
          <FontAwesomeIcon className="social-icons-footer" icon={faLinkedin}></FontAwesomeIcon>
        </a>
        <a href='https://github.com/Kmlove' target='_blank' rel="noreferrer" title="Go to Kim's GitHub">
          <FontAwesomeIcon icon={faGithub} className="social-icons-footer"/>
        </a>
        <a href='https://medium.com/@kimberlymlove15' target='_blank' rel="noreferrer">
          <FontAwesomeIcon icon={faMedium} className="social-icons-footer" title="Go to Kim's blog on Medium"/>
        </a>
        <a href="mailto:kimberlymlove15@gmail.com" >
          <FontAwesomeIcon icon={faEnvelope} className="social-icons-footer" title="Email Kim directly"/>
        </a>
        <a href='/Kimberly-Love-Resume.pdf' target='_blank'>
          <FontAwesomeIcon icon={faFile} className="social-icons-footer" title="Open Kim's resume"/>
        </a>
      </div>
    </footer>
  )
}

export default Footer