import React from "react"
import "../styles/Education.scss"
import { Link } from "react-router-dom"

export default props => {
    return (
        <div className="educationContainer">
            <div>
                <h2>PunchCode</h2>
                <p> Certification: Full-Stack Software Engineer Program</p>
            </div>
            <div>
                <h2>Southern New Hampshire University</h2>
                <p> Degree: Associate of Science</p>
                <p> Field: Information Technologies with Highest Honors</p>
            </div>
            <Link to={"/Portfolio-Mike-Quarne"}>
                <button className="homeButton">Home</button>
            </Link>
        </div>
    )
}