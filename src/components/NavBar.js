import React from "react"
import "../styles/NavBar.css"
import { Link } from "react-router-dom"

export default props => {
  return (
    <div className="navMenu">
      <Link to={"/Portfolio-Mike-Quarne/About"}>
        <button>About Me</button>
      </Link>
      <button>Portfolio</button>
      <button>Education</button>
      <button>Resume</button>
    </div>
  )
}
