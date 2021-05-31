import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/comp1"
          className={location.pathname === "/comp1" ? "nav-link active" : "nav-link"}
        >
          Comp 1
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/comp2"
          className={location.pathname === "/comp2" ? "nav-link active" : "nav-link"}
        >
          Comp 2
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/comp3"
          className={location.pathname === "/comp3" ? "nav-link active" : "nav-link"}
        >
          Comp 3
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/dashboard"
          className={location.pathname === "/dashboard" ? "nav-link active" : "nav-link"}
        >
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/my-campaign"
          className={location.pathname === "/my-campaign" ? "nav-link active" : "nav-link"}
        >
          My Campaign
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
