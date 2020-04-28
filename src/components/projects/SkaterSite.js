import React from "react"
import { Link } from "react-router-dom"
import "../../styles/projects/SkaterSite.scss"

export default (props) => {
	return (
		<div className="skaterSite">
			<Link to={"/Portfolio-Mike-Quarne/Projects"}>
				<div className="project1">
					<img src="http://placehold.it/600" alt="Ska8er-Site replica" />
					<div>
						<h1>Ska8er-Site</h1>
						<h2>Description:</h2>
						<p>
							Our first project in class. We were given an image of a website
							and we had to recreate the site. It was meant to teach us
							principles of HTML and CSS.
						</p>
						<h2>Problems faced:</h2>
						<p>
							Trying to figure out how to position things in the correct space
							and order.
						</p>
						<h2>Lessons learned:</h2>
						<p>
							I learned how to use CSS Grid and Flexbox quite well. Also learned
							how to use pseudo elements.
						</p>
					</div>
				</div>
			</Link>
			<Link to={"/Portfolio-Mike-Quarne"}>
				<button className="homeButton">Home</button>
			</Link>
		</div>
	)
}
