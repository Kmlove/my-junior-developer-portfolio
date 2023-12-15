import React from 'react'
import '../css/projectStyles.scss'
import GoodSportScreenshot2 from '../images/GoodSportScreenshot2.png'
import FitConnectScreenshot2 from '../images/FitConnectScreenshot2.png'
// import GoodSportScreenshot from '../images/GoodSport-Screenshot.png'
// import FitConnectScreenshot from '../images/FitConnect-Screenshot.png'
import FlatStopScreenShot from '../images/FlatStop-Screenshot.png'
import javascriptIcon from '../images/javascript.svg'
import reactIcon from '../images/react.svg'
import pythonIcon from '../images/python.svg'
import flaskIcon from '../images/flask.svg'
import sqlIcon from '../images/sql.svg'
import sqliteIcon from '../images/sqlite.svg'


function Projects() {
  return (
    <div className='even'>
      <div id="projects" className='contain'>
        <h2>Projects</h2>
        {/* <p>Skills grow. So will this portfolio.</p> */}

        <div id="projects-container">

          <div id="tile1" className='project-tile'>
            <div className='project-image'>
              <img src={GoodSportScreenshot2} style={{objectFit: "fit"}} alt="GoodSport Screenshot"/>
            </div>
            <div className='project-text right'>
              <h3>GoodSport</h3>
              <div id="project-description">
                {/* <p>JS-REACT-PYTHON-FLASK-FLASK SQLALCHEMY-SQLITE-ANTD</p> */}
                <p>GoodSport is a sports team schedule management app that will allow users/players to be added to a team and view all events associated with their team, while coaches can add, update and delete events for their teams</p>
              </div>
              <div className='made-with'>
                  <img className="icon-p" src={javascriptIcon} alt='JavaScript Icon'/>
                  <img className="icon-p" src={reactIcon} alt='React Icon'/>
                  <img className="icon-p" src={pythonIcon} alt='Python Icon'/>
                  <img className="icon-p" src={flaskIcon} alt='Flask Icon' style={{width: "20px"}}/>
                  <img className="icon-p" src={sqliteIcon} alt='SQLite Icon'/>
              </div>
              <div id="links">
                <a href="https://goodsport-app.onrender.com" target='_blank' title='GoodSport live on Render' rel="noreferrer" >Live Site</a>
                <a href='https://github.com/Kmlove/GoodSport-Phase-5-Project' target="_blank" title='GoodSport on GitHub' rel="noreferrer">GitHub</a>
              </div>
              <p className='render-warning' style={{marginBottom: "0", color: "red", fontSize: ".8rem"}}>* Deployed on Render, may take 1 - 2 minutes to spin up.</p>
            </div>
          </div>{/*end tile1 div*/}

          <div id="tile2" className='project-tile'>
            <div className='project-text left' style={{alignItems: "end"}}>
              <h3>FitConnect</h3>
              <div id="project-description" style={{textAlign: "right"}}>
                {/* <p>JS-React-Python-Flask-Flask SQLAlchemy-SQLite</p> */}
                <p>FitConnect seamlessly blends fitness logging with a social media twist, where users can share workout insights, post reflections on stored workout routines, and create new shareable workouts for others to engage with and provide feedback on.</p>
              </div>
              <div className='made-with'>
                  <img className="icon-p" src={javascriptIcon} alt='JavaScript Icon'/>
                  <img className="icon-p" src={reactIcon} alt='React Icon'/>
                  <img className="icon-p" src={pythonIcon} alt='Python Icon'/>
                  <img className="icon-p" src={flaskIcon} alt='Flask Icon' style={{width: "20px"}}/>
                  <img className="icon-p" src={sqliteIcon} alt='SQLite Icon'/>
              </div>
              <div id="links">
                <a href="https://fitconnect-app.onrender.com" target='_blank' title='FitConnect live on Render' rel="noreferrer" >Live Site</a>
                <a href='https://github.com/Kmlove/FitConnect-Phase-4-Project' target="_blank" title='FitConnect on GitHub' rel="noreferrer">GitHub</a>
              </div>
              <p className='render-warning' style={{marginBottom: "0", color: "red", fontSize: ".8rem"}}>* Deployed on Render, may take 1 - 2 minutes to spin up.</p>
            </div>
            <div className='project-image'>
              <img src={FitConnectScreenshot2} style={{objectFit: "fit"}} alt="FitConnect Screenshot"/>
            </div>
          </div>

          <div id="tile3" className='project-tile'>
            <div className='project-image'>
              <img src={FlatStopScreenShot} style={{objectFit: "fit"}} alt="GoodSport Screenshot"/>
            </div>
            <div className='project-text right'>
              <h3>FlatStop</h3>
              <div id="project-description">
                {/* <p>Python-SQL-SQLite</p> */}
                <p>A virtual game store that offers an immersive shopping experience where users can explore, curate and buy their favorite games and sell games with a bit of price negotiation, all through simple commands.</p>
              </div>
              <div className='made-with'>
                  <img className="icon-p" src={pythonIcon} alt='Python Icon'/>
                  <img style={{width: "20px"}} className="icon-p" src={sqlIcon} alt='SQL Icon'/>
                  <img className="icon-p" src={sqliteIcon} alt='SQLite Icon'/>
              </div>
              <div id="links">
                <a style={{opacity: "0"}} className="disabled-link" href="" target='_blank' title='FlatStop not yet live' rel="noreferrer" onClick={e => e.preventDefault()}>Live Site</a>
                <a href='https://github.com/Kmlove/FlatStop-Phase-3' target="_blank" title='FlatStop on GitHub' rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>

        </div> {/*end projects-container div*/}
      </div>
    </div>
  )
}

export default Projects