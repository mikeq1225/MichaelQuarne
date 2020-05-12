import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useProjects } from "../../hooks"
import "../../styles/projects/Projects.scss"

export default (props) => {
	const { projects, fetchProjects } = useProjects()

	useEffect(() => {
		fetchProjects()
	}, [])

	return (
		<div className="container">
			<div className="projects">
				{projects.map((project) => (
					<Link
						key={"project" + project.id}
						to={"/MichaelQuarne/Projects/" + project.id}
					>
						<div className="individProject">
							<img src={project.image} alt={project.title + " replica"} />
							<h3>{project.title}</h3>
						</div>
					</Link>
				))}

				<Link to={"/MichaelQuarne"}>
					<button className="homeButton">Home</button>
				</Link>
			</div>
		</div>
	)
}
