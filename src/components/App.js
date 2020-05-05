import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./Home"
import AboutMe from "./AboutMe"
import Projects from "./projects/Projects"
import ProjectView from "./projects/ProjectView"
import Education from "./Education"
import SocialBar from "./SocialBar"
import NavBar from "./NavBar"
import Resume from "./Resume"

export default (props) => {
	return (
		<Router>
			<div>
				<Route exact path="/Portfolio-Mike-Quarne" component={Home}></Route>
				<Route path="/Portfolio-Mike-Quarne" component={SocialBar}></Route>
				<Route path="/Portfolio-Mike-Quarne" component={NavBar}></Route>
				<Route path="/Portfolio-Mike-Quarne/About" component={AboutMe}></Route>
				<Route path="/Portfolio-Mike-Quarne/Resume" component={Resume}></Route>
				<Route
					exact
					path="/Portfolio-Mike-Quarne/Projects"
					component={Projects}
				></Route>
				<Route
					path="/Portfolio-Mike-Quarne/Education"
					component={Education}
				></Route>
				<Route
					path="/Portfolio-Mike-Quarne/Projects/:id"
					component={ProjectView}
				></Route>
			</div>
		</Router>
	)
}
