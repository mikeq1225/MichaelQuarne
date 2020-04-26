import React from "react"
import "../styles/AboutMe.scss"
import { Link } from "react-router-dom"

export default (props) => {
	return (
		<div className="container aboutMe">
			<div>
				<h3>
					I'm a new full-stack software engineer from Las Vegas. I recently
					graduated from PunchCode and am continually looking for new
					opportunitites to show off my skills and learn new ones.
				</h3>
				<h1>Hello, I'm Mike Quarne.</h1>
				<p>
					Head over to my portfolio to see some of the projects I did while I
					was in school.
				</p>
				{/* Insert youTube video of my video resume */}
			</div>
			<div className="infoAboutMe">
				<div>
					<h3>Family</h3>
					<img src="http://placehold.it/200" alt="Family of Mike Quarne"></img>
					<img src="http://placehold.it/200" alt="Family2 of Mike Quarne"></img>
				</div>
				<div>
					<h3>Free Time</h3>
					<p>hobbies</p>
					<p>interests</p>
				</div>
			</div>
			<Link to={"/Portfolio-Mike-Quarne"}>
				<button className="homeButton">Home</button>
			</Link>
		</div>
	)
}
