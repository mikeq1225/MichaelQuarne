import React from "react"
import "../styles/Home.css"
import { FaChevronRight } from "react-icons/fa"

export default props => {
  return (
    <div className="homeContainer">
      <h1>Hello, I'm Mike Quarne.</h1>
      <h3>
        I'm an new full-stack software engineer from Las Vegas. I recently
        graduated from PunchCode and am continually looking for new
        opportunitites to show off my skills and learn new ones.
      </h3>

      <img src="http://placehold.it/300" alt="Headshot of Mike Quarne"></img>
      <p>
        Head over to my portfolio to see some of the projects I did while I was
        in school.
      </p>
      {/* <button>View My Work</button> */}
      <div className="navMenu">
        <button>About Me</button>
        <button>Portfolio</button>
        <button>Education</button>
        <button>Resume</button>
      </div>
    </div>
  )
}
