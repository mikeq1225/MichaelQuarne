import React from "react"
import "../styles/Education.scss"
import { Link } from "react-router-dom"
import "../styles/Education.scss"

export default (props) => {
	return (
		<div className="container">
			<div className="education">
				<div>
					<h2>PunchCode</h2>
					<p> Certification: Full-Stack Software Engineer Program</p>
					<p>
						Description: PunchCode is a 3 month fulltime coding bootcamp where I
						learned more than just how to write code. I completed 420 hours of
						education, experiences, performances, and examinations to earn my
						Certificate.
					</p>
				</div>
				<div>
					<h2>Southern New Hampshire University</h2>
					<p> Degree: Associate of Science</p>
					<p> Program: Information Technologies with Highest Honors</p>
					<p>
						Description: I enrolled in the online Associate degree program while
						I was employeed at Breakthru Beverage. I was working full time and
						doing the online classes fulltime. It took about a year and a half
						to complete the program, but it was well worth it. I graduated with
						a 4.0 GPA and Highest Honors.{" "}
					</p>
				</div>
				<Link to={"/Portfolio-Mike-Quarne"}>
					<button className="homeButton">Home</button>
				</Link>
			</div>
		</div>
	)
}
