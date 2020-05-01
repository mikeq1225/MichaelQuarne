import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useProjects } from "../../hooks"
import "../../styles/projects/ProjectView.scss"
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa"

export default (props) => {
	const [left, setLeft] = useState("")
	const [right, setRight] = useState("")
	const { project, fetchProject, fetchLinks } = useProjects()
	const id = props.match.params.id

	useEffect(() => {
		fetchProject(id)
		fetchLinks(id).then((data) => {
			setLeft(data.left)
			setRight(data.right)
		})
	}, [id])

	return (
		<div className="container">
			<div className="project">
				<div className="project1">
					<Link
						className="arrow"
						to={`/Portfolio-Mike-Quarne/Projects/${left}`}
					>
						<FaAngleDoubleLeft />
					</Link>
					<Link to={"/Portfolio-Mike-Quarne/Projects"}>
						<img src={project.image} alt={project.title + " replica"} />
						<div>
							<h1>{project.title}</h1>
							<p>Description:</p>
							<h2>{project.description}</h2>
							<p>Issues Faced:</p>
							<h2>{project.problem}</h2>
							<p>Lessons Learned:</p>
							<h2>{project.lessons}</h2>
							<p>Languages/Technologies Used:</p>
							<h2>{project.tech}</h2>
						</div>
					</Link>
					<Link
						className="arrow"
						to={`/Portfolio-Mike-Quarne/Projects/${right}`}
					>
						<FaAngleDoubleRight />
					</Link>
				</div>
				<Link to={"/Portfolio-Mike-Quarne"}>
					<button className="homeButton">Home</button>
				</Link>
			</div>
		</div>
	)
}
