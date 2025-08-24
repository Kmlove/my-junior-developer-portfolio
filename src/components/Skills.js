import React from "react";
import "../css/skillsStyles.scss";
import javascriptIcon from "../images/javascript.svg";
import cssIcon from "../images/css.svg";
import htmlIcon from "../images/html.svg";
import reactIcon from "../images/react.svg";
import pythonIcon from "../images/python.svg";
import flaskIcon from "../images/flask.svg";
import gitIcon from "../images/git.svg";
import githubIcon from "../images/github.svg";
import sqlIcon from "../images/sql.svg";
import sqliteIcon from "../images/sqlite.svg";
import commandLineIcon from "../images/command-line.svg";
import restfulApiIcon from "../images/restul-api.svg";
import vscodeIcon from "../images/vscode.svg";
import responsiveIcon from "../images/responsive-design.svg";
import sassIcon from "../images/sass.svg";
import javaIcon from "../images/java.svg";
import gitlabIcon from "../images/gitlab.svg";
import postgresqlIcon from "../images/postgresql.svg";
import springbootIcon from "../images/Spring_Boot.svg.png";
import vueIcon from "../images/VueJS.svg";
import nestIcon from "../images/NestJS.svg";
import grafanaIcon from "../images/Grafana.svg";
import jestIcon from "../images/Jest.svg";
import ampltidueLogo from "../images/amplitude.svg";
import playwrightIcon from "../images/Playwright.svg";
import typescriptIcon from "../images/Typescript.svg";

function Skills() {
  return (
    <div className="odd">
      <div id="skills" className="contain" style={{ paddingBottom: "15px" }}>
        <h2>Skills & Tools</h2>
        <div id="skills-icon-container">
          <div className="icon">
            <img src={javascriptIcon} alt="JavaScript Icon" />
            <p>JavaScript</p>
          </div>
          <div className="icon">
            <img src={typescriptIcon} alt="Typescript Icon" />
            <p>TypeScript</p>
          </div>
          <div className="icon">
            <img src={vueIcon} alt="Vue Icon" />
            <p>Vue</p>
          </div>
          <div className="icon">
            <img src={nestIcon} alt="NestJS Icon" />
            <p>NestJS</p>
          </div>
          <div className="icon">
            <img src={reactIcon} alt="React Icon" />
            <p>React</p>
          </div>
          <div className="icon">
            <img src={reactIcon} alt="React Native Icon" />
            <p>React Native</p>
          </div>
          <div className="icon">
            <img src={pythonIcon} alt="Python Icon" />
            <p>Python</p>
          </div>
          <div className="icon">
            <img src={flaskIcon} alt="Flask Icon" />
            <p>Flask</p>
          </div>
          <div className="icon">
            <img style={{ height: "75px" }} src={javaIcon} alt="Java Icon" />
            <p>Java</p>
          </div>
          <div className="icon">
            <img src={springbootIcon} alt="Spring Boot Icon" />
            <p>Spring Boot</p>
          </div>
          <div className="icon">
            <img src={sqlIcon} alt="SQL Icon" />
            <p>SQL</p>
          </div>
          <div className="icon">
            <img src={postgresqlIcon} alt="PostgreSQL Icon" />
            <p>PostgreSQL</p>
          </div>
          <div className="icon">
            <img src={sqliteIcon} alt="SQLite Icon" />
            <p>SQLite</p>
          </div>
          <div className="icon">
            <img src={ampltidueLogo} alt="Amplitude Analytics Icon" />
            <p>Amplitude Analytics</p>
          </div>
          <div className="icon">
            <img src={grafanaIcon} alt="Grafana Icon" />
            <p>Grafana</p>
          </div>
          <div className="icon">
            <img style={{ width: '60px' }} src={playwrightIcon} alt="Playwright Icon" />
            <p>Playwright</p>
          </div>
          <div className="icon">
            <img src={jestIcon} alt="Jest Icon" />
            <p>Jest</p>
          </div>
          <div className="icon">
            <img src={htmlIcon} alt="HTML Icon" />
            <p>HTML 5</p>
          </div>
          <div className="icon">
            <img src={cssIcon} alt="CSS Icon" />
            <p>CSS 3</p>
          </div>
          <div className="icon">
            <img src={githubIcon} alt="GitHub Icon" />
            <p>GitHub</p>
          </div>
          <div className="icon">
            <img src={gitlabIcon} alt="GitLab Icon" />
            <p>GitLab</p>
          </div>
          <div className="icon">
            <img src={gitIcon} alt="Git Icon" />
            <p>Git</p>
          </div>
          <div className="icon">
            <img src={vscodeIcon} alt="VS Code Icon" />
            <p>VS Code</p>
          </div>
          <div className="icon">
            <img src={commandLineIcon} alt="Command Line Icon" />
            <p>Command Line</p>
          </div>
          <div className="icon">
            <img
              style={{ height: "150px" }}
              src={restfulApiIcon}
              alt="RESTful Icon"
            />
            <p>RESTful APIs</p>
          </div>
          <div className="icon">
            <img src={responsiveIcon} alt="Responsive Design Icon" />
            <p>Responsive Design</p>
          </div>
          <div className="icon">
            <img style={{ height: "60px" }} src={sassIcon} alt="Sass Icon" />
            <p>Sass</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
