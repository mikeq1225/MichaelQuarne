import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useProjects } from "../../hooks"
import "../../styles/projects/Projects.scss"

export default (props) => {
	const { projects } = useProjects()

	return (
		<div className="container">
			<div className="projects">
				{projects.map((project) => (
					<Link
						key={"project" + project.id}
						to={"/Portfolio-Mike-Quarne/Projects/" + project.id}
					>
						<div className="individProject">
							<img
								src="http://placehold.it/200"
								alt={project.name + "replica"}
							/>
							<h3>{project.title}</h3>
						</div>
					</Link>
				))}

				<Link to={"/Portfolio-Mike-Quarne"}>
					<button className="homeButton">Home</button>
				</Link>
			</div>
		</div>
	)
}
