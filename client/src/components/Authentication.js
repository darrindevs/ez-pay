import React from "react";

export default function Authentication() {
    
    return (
        <form action="http://localhost:5000/auth/google">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <span className="google-button__text">Get Started</span>
          </button>
        </form>
    )
  }
  