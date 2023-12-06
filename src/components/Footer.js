import React, {useState, useEffect} from 'react'
import "../css/footerStyles.scss"
import KLlogo from '../images/Kimberly-Love-Logo-Color-Zoomed.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons"

function Footer() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let imgHeight 
  if(viewportWidth <= 380){
    imgHeight = {height: "50px"}
  } else if (viewportWidth <= 440){
    imgHeight = {height: "55px"}
  } else {
    imgHeight = {height: "60px"}
  }

  return (
    <footer>
      <div>
        <img style={imgHeight} src={KLlogo} alt='Kimberly Love Logo' />
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