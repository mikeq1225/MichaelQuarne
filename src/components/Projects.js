import React from "react"
import "../styles/Education.scss"
import { Link } from "react-router-dom"


export default props => {
  return (
    <div className="projectsContainer">
      <h3>Projects</h3>
      <div className="projects">
        <div>
         <img src="http://placehold.it/50" alt="Project picture"/>
         <div>
          <p>Title: Ska8er-Site</p>
          <p>Description: </p>
          <p>Problems faced:</p>
          <p>Lessons Learned:</p>
         </div>
        </div>
        <div>
         <img src="http://placehold.it/50" alt="Project picture"/>
         <div>
          <p>Title: Ska8er-Site</p>
          <p>Description: </p>
          <p>Problems faced:</p>
          <p>Lessons Learned:</p>
         </div>
        </div>
        <div>
         <img src="http://placehold.it/50" alt="Project picture"/>
         <div>
          <p>Title: Ska8er-Site</p>
          <p>Description: </p>
          <p>Problems faced:</p>
          <p>Lessons Learned:</p>
         </div>
        </div>
        <div>
         <img src="http://placehold.it/50" alt="Project picture"/>
         <div>
          <p>Title: Ska8er-Site</p>
          <p>Description: </p>
          <p>Problems faced:</p>
          <p>Lessons Learned:</p>
         </div>
        </div>
        <div>
         <img src="http://placehold.it/50" alt="Project picture"/>
         <div>
          <p>Title: Ska8er-Site</p>
          <p>Description: </p>
          <p>Problems faced:</p>
          <p>Lessons Learned:</p>
         </div>
        </div>
        <div>
         <img src="http://placehold.it/50" alt="Project picture"/>
         <div>
          <p>Title: Ska8er-Site</p>
          <p>Description: </p>
          <p>Problems faced:</p>
          <p>Lessons Learned:</p>
         </div>
        </div>
      </div>
      <Link to={"/Portfolio-Mike-Quarne"}>
        <button className="homeButton">Home</button>
      </Link>
    </div>
  )
}