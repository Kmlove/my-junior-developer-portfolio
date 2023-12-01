import React from 'react'
import '../css/projectStyles.scss'
import GoodSportScreenshot from '../images/GoodSport-Screenshot.png'
import FitConnectScreenshot from '../images/FitConnect-Screenshot.png'
import FlatStopScreenShot from '../images/FlatStop-Screenshot.png'
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

function Projects() {
  return (
    <div id="projects" className='even'>
      <h2>Projects</h2>
      {/* <p>Skills grow. So will this portfolio.</p> */}

      <div id="projects-container">

        <div id="tile1" className='project-tile'>
          <div className='project-image'>
            <img src={GoodSportScreenshot} alt="GoodSport Screenshot"/>
          </div>
          <div className='project-text right'>
            <h3>GoodSport</h3>
            <div id="project-description">
              {/* <p>JS-REACT-PYTHON-FLASK-FLASK SQLALCHEMY-SQLITE-ANTD</p> */}
              <p>GoodSport is a sports team schedule management app that will allow users to be added to a team, and view all events that are associated with their team. Coaches can add, update and delete events for their teams.</p>
            </div>
            <div className='made-with'>
                <img className="icon-p" src={javascriptIcon} alt='JavaScript Icon'/>
                <img className="icon-p" src={reactIcon} alt='React Icon'/>
                <img className="icon-p" src={pythonIcon} alt='Python Icon'/>
                <img className="icon-p" src={flaskIcon} alt='Flask Icon' style={{width: "20px"}}/>
                <img className="icon-p" src={sqliteIcon} alt='SQLite Icon'/>
            </div>
            <div id="links">
              <a className="disabled-link" href="" target='_blank' title='GoodSport not yet live' rel="noreferrer" onClick={e => e.preventDefault()}>Live Site</a>
              <a href='https://github.com/Kmlove/GoodSport-Phase-5-Project' target="_blank" title='GoodSport on GitHub' rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>{/*end tile1 div*/}

        <div id="tile2" className='project-tile'>
          <div className='project-text left' style={{alignItems: "end"}}>
            <h3>FitConnect</h3>
            <div id="project-description" style={{textAlign: "right"}}>
              {/* <p>JS-React-Python-Flask-Flask SQLAlchemy-SQLite</p> */}
              <p>FitConnect seamlessly blends fitness logging with a social media twist, allowing users to share workout insights and post reflections on stored routines, and create new shareable workouts for others to engage with and provide feedback on.</p>
            </div>
            <div className='made-with'>
                <img className="icon-p" src={javascriptIcon} alt='JavaScript Icon'/>
                <img className="icon-p" src={reactIcon} alt='React Icon'/>
                <img className="icon-p" src={pythonIcon} alt='Python Icon'/>
                <img className="icon-p" src={flaskIcon} alt='Flask Icon' style={{width: "20px"}}/>
                <img className="icon-p" src={sqliteIcon} alt='SQLite Icon'/>
            </div>
            <div id="links">
              <a className="disabled-link" href="" target='_blank' title='FitConnect not yet live' rel="noreferrer" onClick={e => e.preventDefault()}>Live Site</a>
              <a href='https://github.com/Kmlove/FitConnect-Phase-4-Project' target="_blank" title='FitConnect on GitHub' rel="noreferrer">GitHub</a>
            </div>
          </div>
          <div className='project-image'>
            <img src={FitConnectScreenshot} alt="FitConnect Screenshot"/>
          </div>
        </div>

        <div id="tile3" className='project-tile'>
          <div className='project-image'>
            <img src={FlatStopScreenShot} alt="GoodSport Screenshot"/>
          </div>
          <div className='project-text right'>
            <h3>FlatStop</h3>
            <div id="project-description">
              {/* <p>Python-SQL-SQLite</p> */}
              <p>A virtual game store that offers an immersive shopping experience where you can explore, curate and buy your favorite games and sell games with a bit of price negotiation, all through simple commands.</p>
            </div>
            <div className='made-with'>
                <img className="icon-p" src={pythonIcon} alt='Python Icon'/>
                <img style={{width: "20px"}} className="icon-p" src={sqlIcon} alt='SQL Icon'/>
                <img className="icon-p" src={sqliteIcon} alt='SQLite Icon'/>
            </div>
            <div id="links">
              <a className="disabled-link" href="" target='_blank' title='FlatStop not yet live' rel="noreferrer" onClick={e => e.preventDefault()}>Live Site</a>
              <a href='https://github.com/Kmlove/FlatStop-Phase-3' target="_blank" title='FlatStop on GitHub' rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>

      </div> {/*end projects-container div*/}
    </div>
  )
}

export default Projects