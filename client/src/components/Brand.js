import { Link, useLocation } from "react-router-dom";

export default function Brand() {
    const location = useLocation();

    return (
        <Link
        to="/"
        className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
        <h1 className="text-indigo-800"><strong>PayMo</strong></h1>
        </Link>   
    )
  }
  