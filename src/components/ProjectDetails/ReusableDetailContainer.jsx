import React, { useState, useEffect } from "react";
import "../../css/projectDetailStyles.scss";
import KLlogo from "../../images/Kimberly-Love-Logo-Color-Zoomed.png";
import LargeDetailNavBar from "./LargeDetailNavBar";
import SmallDetailNavBar from "./SmallDetailNavBar";

function ReusableDetailContainer({ children, detailPageHeader }) {
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
      style={{ height: viewportWidth > 1500 ? "100vh" : "100%" }}
    >
      {viewportWidth > 630 ? (
        <LargeDetailNavBar KLlogo={KLlogo} />
      ) : (
        <SmallDetailNavBar KLlogo={KLlogo} />
      )}

      <div className="detail-container">
        <h1 className="detail-header">{detailPageHeader}</h1>
        {children}
      </div>
    </div>
  );
}

export default ReusableDetailContainer;
