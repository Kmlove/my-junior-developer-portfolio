import React from 'react'
import '../css/skillsStyles.scss'
import javascriptIcon from '../images/javascript.svg'
import cssIcon from '../images/css.svg'
import htmlIcon from '../images/html.svg'
import reactIcon from '../images/react.svg'
import pythonIcon from '../images/python.svg'
import flaskIcon from '../images/flask.svg'
import gitIcon from '../images/git.svg'
import githubIcon from '../images/github.svg'
import sqlIcon from '../images/sql.svg'
import sqliteIcon from '../images/sqlite.svg'
import commandLineIcon from "../images/command-line.svg"
import restfulApiIcon from '../images/restul-api.svg'
import vscodeIcon from '../images/vscode.svg'
import responsiveIcon from '../images/responsive-design.svg'
import sassIcon from '../images/sass.svg'

function Skills() {
  return (
    <div className='odd'>
        <div id="skills" className='contain' style={{paddingBottom: "15px"}}>
            <h2>Skills & Tools</h2>
            <div id="skills-icon-container">
                <div className='icon'>
                    <img src={htmlIcon} alt='HTML Icon'/>
                    <p>HTML 5</p>
                </div>
                <div className='icon'>
                    <img src={cssIcon} alt='CSS Icon'/>
                    <p>CSS 3</p>
                </div>
                <div className='icon'>
                    <img src={javascriptIcon} alt='JavaScript Icon'/>
                    <p>JavaScript</p>
                </div>
                <div className='icon'>
                    <img src={reactIcon} alt='React Icon'/>
                    <p>React</p>
                </div>
                <div className='icon'>
                    <img src={pythonIcon} alt='Python Icon'/>
                    <p>Python</p>
                </div>
                <div className='icon'>
                    <img src={flaskIcon} alt='Flask Icon'/>
                    <p>Flask</p>
                </div>
                <div className='icon'>
                    <img src={sqlIcon} alt='SQL Icon'/>
                    <p>SQL</p>
                </div>
                <div className='icon'>
                    <img src={sqliteIcon} alt='SQLite Icon'/>
                    <p>SQLite</p>
                </div>
                <div className='icon'>
                    <img src={githubIcon} alt='GitHub Icon'/>
                    <p>GitHub</p>
                </div>
                <div className='icon'>
                    <img src={gitIcon} alt='Git Icon'/>
                    <p>Git</p>
                </div>
                <div className='icon'>
                    <img src={vscodeIcon} alt='VS Code Icon'/>
                    <p>VS Code</p>
                </div>
                <div className='icon'>
                    <img src={commandLineIcon} alt='Command Line Icon' />
                    <p>Command Line</p>
                </div>
                <div className='icon' >
                    <img style={{height: "150px"}} src={restfulApiIcon} alt='RESTful Icon'/>
                    <p>RESTful APIs</p>
                </div>
                <div className='icon' >
                    <img src={responsiveIcon} alt='Responsive Design Icon'/>
                    <p>Responsive Design</p>
                </div>
                <div className='icon' >
                    <img style={{height: "60px"}} src={sassIcon} alt='Sass Icon'/>
                    <p>Sass</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills