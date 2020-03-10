import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./Home"
import AboutMe from "./AboutMe"
import Projects from "./Projects"
import Education from "./Education"
import SocialBar from "./SocialBar"
import NavBar from "./NavBar"

export default props => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home}></Route>
        <Route path="/" component={SocialBar}></Route>
        <Route path="/" component={NavBar}></Route>
        <Route path="/mikeQuarne" component={AboutMe}></Route>
        {/* <Route path="/projects" component={Projects}></Route> */}
        {/* <Route path="/education" component={Education}></Route> */}
      </div>
    </Router>
  )
}
