import React from "react"
import "../styles/AboutMe.css"
import { Link } from "react-router-dom"

export default props => {
  return (
    <div className="aboutMeContainer">
      <p>Hello</p>
      <Link to={"/"}>
        <button className="homeButton">Home</button>
      </Link>
    </div>
  )
}
