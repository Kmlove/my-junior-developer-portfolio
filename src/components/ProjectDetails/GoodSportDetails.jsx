import React, { useState, useEffect } from "react";
import "../../css/projectDetailStyles.scss";
import KLlogo from "../../images/Kimberly-Love-Logo-Color-Zoomed.png";
import LargeDetailNavBar from "./LargeDetailNavBar";
import SmallDetailNavBar from "./SmallDetailNavBar";

function GoodSportDetails() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="detail-page"
      style={{ height: viewportWidth > 630 ? "100vh" : "100%" }}
    >
      {viewportWidth > 630 ? (
        <LargeDetailNavBar KLlogo={KLlogo} />
      ) : (
        <SmallDetailNavBar KLlogo={KLlogo} />
      )}

      <div className="detail-container">
        <h1 className="detail-header">GoodSport Project Details:</h1>
        <h2>Frontend</h2>
        <ul>
          <li>
            Crafted an intricate navigation system utilizing React, CSS, and
            JavaScript for seamless content exploration
          </li>
          <li>
            Incorporated client-side routing with React Router to emulate a
            Multi-Page Application (MPA) experience
          </li>
          <li>
            Utilized React and JSX to create modular components, streamlining
            development and ensuring code maintainability
          </li>
          <li>
            Applied responsive web design principles to ensure compatibility
            across various devices and screen sizes
          </li>
          <li>
            Implemented dynamic features with JavaScript (JS), enhancing user
            engagement in the application
          </li>
          <li>
            Developed and maintained GoodSport's frontend using HTML, CSS, and
            JS for seamless user interaction
          </li>
          <li>
            Ensured continuous development and maintenance of the frontend by
            addressing any bugs and adding new features
          </li>
        </ul>

        <h2>Backend</h2>
        <ul>
          <li>
            Established model relationships by designing a relational database
            structure using Flask-SQLAlchemy and SQLite
          </li>
          <li>
            Integrated RESTful JSON API routes with Flask and Python for
            streamlined frontend-backend communication
          </li>
          <li>
            Implemented CRUD functionality, enabling account creation, event
            management, and efficient data manipulation
          </li>
          <li>
            Enforced data validation rules for player and user information
            during creation and updates, ensuring data integrity
          </li>
          <li>
            Incorporated secure password hashing using bcrypt, enhancing data
            protection by encrypting user passwords
          </li>
          <li>
            Utilized SQLAlchemy's ORM to streamline interaction with databases,
            enhancing code readability and maintainability
          </li>
          <li>
            Managed seamless schema changes with Flask-Migrate, ensuring data
            integrity and consistency
          </li>
        </ul>
      </div>
    </div>
  );
}

export default GoodSportDetails;
