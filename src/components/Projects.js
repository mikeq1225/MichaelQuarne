import React from "react"
import "../styles/Education.scss"
import { Link } from "react-router-dom"


export default props => {
    return (
        <div className="projectsContainer">
            <Link to={"/Portfolio-Mike-Quarne"}>
                <button className="homeButton">Home</button>
            </Link>
        </div>
    )
}