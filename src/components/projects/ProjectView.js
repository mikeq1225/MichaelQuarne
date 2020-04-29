import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useProjects } from "../../hooks"
import "../../styles/projects/ProjectView.scss"

export default (props) => {
	const { project, fetchProject } = useProjects()
	const id = props.match.params.id

	useEffect(() => {
		fetchProject(id)
	}, [props.match.params])

	return (
		<div className="container">
			<div className="project">
				<Link to={"/Portfolio-Mike-Quarne/Projects"}>
					<div className="project1">
						<img src={project.image} alt={project.title + " replica"} />
						<div>
							<h1>{project.title}</h1>
							<p>Description</p>
							<h2>{project.description}</h2>
							<p>Issues Faced</p>
							<h2>{project.problem}</h2>
							<p>Lessons Learned</p>
							<h2>{project.lessons}</h2>
							<p>Languages/Technologies Used</p>
							<h2>{project.tech}</h2>
						</div>
					</div>
				</Link>
				<Link to={"/Portfolio-Mike-Quarne"}>
					<button className="homeButton">Home</button>
				</Link>
			</div>
		</div>
	)
}
