import React from 'react'
import '../css/skillsStyles.css'
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

function Skills() {
  return (
    <div id="skills">
        <h2>Skills</h2>
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
                <img src={gitIcon} alt='git Icon'/>
                <p>Git</p>
            </div>
        </div>
    </div>
  )
}

export default Skills