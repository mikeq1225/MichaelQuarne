import React from "react"
import "../styles/Resume.scss"
import { Link } from "react-router-dom"

export default (props) => {
	return (
		<div className="container">
			<div className="resume">
				<iframe src="./assets/MichaelQuarneResume.pdf"></iframe>
				<Link to={"/Portfolio-Mike-Quarne"}>
					<button className="homeButton">Home</button>
				</Link>
			</div>
		</div>
	)
}
