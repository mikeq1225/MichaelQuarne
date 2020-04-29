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
				<h1>{project.title}</h1>
				<Link to={"/Portfolio-Mike-Quarne/Projects"}>
					<div className="project1">
						<p>Hello</p>
					</div>
				</Link>
				<Link to={"/Portfolio-Mike-Quarne"}>
					<button className="homeButton">Home</button>
				</Link>
			</div>
		</div>
	)
}
