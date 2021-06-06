import { Link, useLocation } from "react-router-dom";

export default function BrandWhite() {
    const location = useLocation();

    return (
        <Link
        to="/"
        className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
        <h1 className="text-white"><strong>EZ ⚡️ Pay</strong></h1>
        </Link>   
    )
  }
  