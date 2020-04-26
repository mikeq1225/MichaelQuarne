import React, { useState } from "react"
import "../styles/Education.scss"
import { Link } from "react-router-dom"
import "../styles/Projects.scss"

export default (props) => {
	const [zoomIn, setZoomIn] = useState(false)

	return (
		<div className="container projects">
			<h1>Projects</h1>
			<div className="project">
				<a onClick={(e) => (!zoomIn ? setZoomIn(true) : setZoomIn(false))}>
					<div className={zoomIn ? "zoomIn" : "individProject"}>
						<img src="http://placehold.it/200" alt="Ska8er-Site replica" />
						<h3>Ska8er-Site</h3>
						<div>
							<p>
								Description: Our first project in class. We were given an image
								of a website and we had to recreate the site. It was meant to
								teach us principles of HTML and CSS.
							</p>
							<p>
								Problems: Trying to figure out how to position things in the
								correct space and order.
							</p>
							<p>
								Lessons: I learned how to use CSS Grid and Flexbox quite well.
								Also learned how to use pseudo elements.
							</p>
						</div>
					</div>
				</a>
				<div>
					<img src="http://placehold.it/50" alt="Etsy search recreation" />
					<h3>Create-Etsy-Search-Page</h3>
					<div>
						<p>
							Description: Given a mock-up of an Etsy page, we had to recreate
							the page. We were also given a JSON file with dummy data to be
							used for the search.
						</p>
						<p>
							Problems: How to dynamically import the data without typing all of
							it out.
						</p>
						<p>
							Lessons Learned: This was our first step into JavaScript. I also
							learned how to use jQuery to create a template to map through and
							display the data.
						</p>
					</div>
				</div>
				<div>
					<img src="http://placehold.it/50" alt="Fictional restaurant site" />
					<h3>Group-Project</h3>
					<div>
						<p>
							Description: A group assingment where we utilized Github for
							version control and collaboration to make a website for a
							fictional restaurant. We were given a JSON file with menu items.
						</p>
						<p>
							Problems: How do we work on the same project without causing
							problems and still creating a cohesive looking website.
						</p>
						<p>
							Lessons: I learned how to use Github's branches to ensure my team
							could work on the same website but in different sections to avoid
							conflicts.
						</p>
					</div>
				</div>
				<div>
					<img src="http://placehold.it/50" alt="React shopping cart" />
					<h3>react-shopping-cart</h3>
					<div>
						<p>
							Description: Our first steps in React. We had to recreate a
							T-shirt website with the ability to add and delete in a cart as
							well as simulating a checkout/receipt screen.{" "}
						</p>
						<p>
							Problems: How to use React and Redux to control the state of items
							in the cart.
						</p>
						<p>
							Lessons: I learned how to effectively use components to make my
							code more manageable as well as creating a seamless experience for
							the user. Also learned how to use Redux to monitor the state of
							items in the cart and some CSS properties.
						</p>
					</div>
				</div>
				<div>
					<img src="http://placehold.it/50" alt="Craigslist clone website" />
					<h3>ryan_list</h3>
					<div>
						<p>
							Description: We were tasked with making a replica CraigsList
							website where users could search and add postings using React
							components and a MySQL database.
						</p>
						<p>
							Problems: Using React and Redux to keep track of several different
							pieces of state on differenet components while integrating a MySQL
							database.
						</p>
						<p>
							Lessons: I learned how to construct useful and concise MySQL
							queries to retrieve date from and add data to the database.
						</p>
					</div>
				</div>
				<div>
					<img src="http://placehold.it/50" alt="travel planning application" />
					<h3>Jurn(ease)</h3>
					<div>
						<p>
							Description: A group travel planning app that encompasses
							everything I learned at PunchCode.
						</p>
						<p>
							Problems: How do you take an idea from conception to a finished
							application.
						</p>
						<p>
							Lessons: I learned how to plan and execute a large project, how to
							take all the languages and tools from class and apply them to one
							big, how to use AWS as a remote MySQL database for our project,
							and I learned how to accomplish all of this while working
							remotely.
						</p>
					</div>
				</div>
			</div>
			<Link to={"/Portfolio-Mike-Quarne"}>
				<button className="homeButton">Home</button>
			</Link>
		</div>
	)
}
