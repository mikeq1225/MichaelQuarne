import React from "react"
import "../styles/NavBar.scss"
import { Link } from "react-router-dom"

export default (props) => {
	return (
		<div className="navMenu">
			<Link to={"/MichaelQuarne/About"}>
				<button>About Me</button>
			</Link>
			<Link to={"/MichaelQuarne/Projects"}>
				<button>Projects</button>
			</Link>
			<Link to={"/MichaelQuarne/Education"}>
				<button>Education</button>
			</Link>
			<Link to={"/MichaelQuarne/Resume"}>
				<button>Resume</button>
			</Link>
		</div>
	)
}
