import React from "react";
import { Link, useLocation } from "react-router-dom";

function LinkMyProfile() {
  const location = useLocation();

  return (
    <>
    <span className="text-xs text-blue-600">
    <Link to="/public" className={location.pathname === "/public" ? "nav-link active" : "nav-link"}>
          My Public Profile
        </Link>

    </span>
    
    </>
  );
}

export default LinkMyProfile;
