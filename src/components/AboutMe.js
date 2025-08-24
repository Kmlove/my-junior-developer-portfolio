import React, { useState } from "react";
import "../css/aboutMeStyles.scss";

function AboutMe() {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => setShowMore((prev) => !prev);

  return (
    <div className="even">
      <div id="aboutMe" className="contain">
        <h2>About Me</h2>
        <p>
          I'm a former healthcare professional turned software engineer with a
          strong foundation in problem-solving and a passion for continuous
          learning. After graduating from Flatiron School's Software Engineering
          Bootcamp in 2023, I began my journey in tech and haven't looked back.
          I believe in the power of technology to create meaningful change and
          I'm excited to keep building solutions that make an impact.
        </p>

        <a
          style={{ display: "none" }}
          href="/Kimberly-Love-Resume.pdf"
          target="_blank"
        >
          View Resume
        </a>

        {showMore && (
          <div>
            <h3>My Background</h3>
            <p>
              I hold a Bachelor of Science degree from Purdue University, with a
              concentration in Pre-Physician Assistant studies and a minor in
              Psychology. Before pivoting to tech, I spent several years working
              in healthcare as a Physical Therapy Technician. That hands-on
              experience taught me empathy, collaboration, and how to stay
              adaptable in fast-paced environments.
            </p>

            <h3>Where I Am Now</h3>
            <p>
              Since completing my bootcamp, I've developed full-stack
              applications, contributed to mobile features, and currently work
              as a Software Developer at Catalyte. I'm currently on contract
              with a major news and finance company, where I've:
              <ul>
                <li>
                  Led UI development for a redesigned search and navigation
                  experience using Vue.js
                </li>
                <li>
                  Improved frontend test coverage and reliability with
                  Playwright
                </li>
                <li>
                  Collaborated with UX teams to enhance accessibility and user
                  experience
                </li>
              </ul>
              I also volunteered with a nonprofit as a Full Stack Developer,
              contributing to a React Native travel app that fosters cultural
              exchange and community connection.
            </p>
            <p>
              I'm always looking to grow as a developer and connect with others
              in the industry. I'm currently open to networking, new
              opportunities, and collaborating with teams focused on impactful
              work.
            </p>

            <h3>For Fun</h3>
            <p>
              Outside of tech, I love cooking and staying active. I enjoy
              playing soccer, biking, and exploring hiking trails in my area.
            </p>
          </div>
        )}

        <button onClick={toggleShowMore}>
          {showMore ? "Read Less..." : "Read More..."}
        </button>
      </div>
    </div>
  );
}

export default AboutMe;
