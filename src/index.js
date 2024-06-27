import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GoodSportDetails from "./components/ProjectDetails/GoodSportDetails";
import FitConnectDetails from "./components/ProjectDetails/FitConnectDetails";
import FlatStopDetils from "./components/ProjectDetails/FlatStopDetils";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "projects/GoodSport",
    element: <GoodSportDetails />,
  },
  {
    path: "projects/FitConnect",
    element: <FitConnectDetails />,
  },
  {
    path: "projects/FlatStop",
    element: <FlatStopDetils />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
