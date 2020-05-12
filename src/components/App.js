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
				<Route exact path="/MichaelQuarne" component={Home}></Route>
				<Route path="/MichaelQuarne" component={SocialBar}></Route>
				<Route path="/MichaelQuarne" component={NavBar}></Route>
				<Route path="/MichaelQuarne/About" component={AboutMe}></Route>
				<Route path="/MichaelQuarne/Resume" component={Resume}></Route>
				<Route
					exact
					path="/MichaelQuarne/Projects"
					component={Projects}
				></Route>
				<Route path="/MichaelQuarne/Education" component={Education}></Route>
				<Route
					path="/MichaelQuarne/Projects/:id"
					component={ProjectView}
				></Route>
			</div>
		</Router>
	)
}
