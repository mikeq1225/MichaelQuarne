import React from "react"
import { Link } from "react-router-dom"
import "../../styles/projects/ProjectView.scss"

export default (props) => {
	return (
		<div className="skaterSite">
			<Link to={"/Portfolio-Mike-Quarne/Projects"}>
				<div className="project1"></div>
			</Link>
			<Link to={"/Portfolio-Mike-Quarne"}>
				<button className="homeButton">Home</button>
			</Link>
		</div>
	)
}
