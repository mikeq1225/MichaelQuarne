import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useProjects } from "../../hooks"
import "../../styles/projects/Projects.scss"

export default (props) => {
	const { projects } = useProjects()

	return (
		<div className="container projects">
			<Link to={"/Portfolio-Mike-Quarne/Projects/:id"}>
				{projects.map((project) => (
					<div key={"project" + project.id} className="individProject">
						<img src="http://placehold.it/200" alt={project.name + "replica"} />
						<h3>Ska8er-Site</h3>
					</div>
				))}
			</Link>
			<Link to={"/Portfolio-Mike-Quarne"}>
				<button className="homeButton">Home</button>
			</Link>
		</div>
	)
}
