import React from "react"
import "../styles/NavBar.scss"
import { Link } from "react-router-dom"

export default (props) => {
	return (
		<div className="navMenu">
			<Link to={"/Portfolio-Mike-Quarne/About"}>
				<button>About Me</button>
			</Link>
			<Link to={"/Portfolio-Mike-Quarne/Projects"}>
				<button>Projects</button>
			</Link>
			<Link to={"/Portfolio-Mike-Quarne/Education"}>
				<button>Education</button>
			</Link>
			<Link to={"/Portfolio-Mike-Quarne/Portfolio"}>
				<button>Resume</button>
			</Link>
		</div>
	)
}
