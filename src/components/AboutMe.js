import React from "react"
import ReactPlayer from "react-player"
import "../styles/AboutMe.scss"
import { Link } from "react-router-dom"

export default (props) => {
	return (
		<div className="container">
			<div className="aboutMe">
				<div>
					<div className="playerWrapper">
						<ReactPlayer
							className="reactPlayer"
							url="https://www.youtube.com/watch?v=XxrOahK4cDE&t=2s"
							controls={true}
						/>
					</div>
					<p>
						Michael Quarne is a full-stack web developer from Las Vegas. A
						recent graduate from PunchCode’s three month long Full-Stack
						Engineer bootcamp. Skilled at building web applications from the
						ground up – from concept, to design, to writing well-designed,
						testable and efficient code while focusing on UX/UI. The completion
						of Michael’s capstone project, a vacation planning web application
						called Jurn(ease), showcases how much he has learned in three
						months.
					</p>
					<p>
						Michael’s coding philosophy starts with strategic planning,
						designing, and developing applications to help reach desired
						objectives and goals. He surrounds himself with technical people,
						activities, hobbies, and endeavors with a drive to keep learning
						through experiences.
					</p>
					<p>
						Originally from Milwaukee, WI, Michael and his wife relocated to Las
						Vegas after their children joined the military and informed them
						that they would not be moving back to Wisconsin. Michael and his
						wife decided it was a good time to move somewhere warm and exciting
						to begin a new chapter in their lives.
					</p>
				</div>
				{/* <div className="infoAboutMe">
					<div>
						<h3>Free Time</h3>
						<p>hobbies</p>
						<p>interests</p>
					</div>
				</div> */}
				<Link to={"/Portfolio-Mike-Quarne"}>
					<button className="homeButton">Home</button>
				</Link>
			</div>
		</div>
	)
}
