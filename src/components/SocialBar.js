import React from "react"
import "../styles/SocialBar.scss"
import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaGithub,
} from "react-icons/fa"

export default (props) => {
	return (
		<div className="social">
			<a href="https://github.com/mikeq1225" target="_blank" rel="noopener">
				<FaGithub />
			</a>
			<a
				href="https://www.linkedin.com/in/michaelquarne/"
				target="_blank"
				rel="noopener"
			>
				<FaLinkedinIn />
			</a>
			<a href="https://www.facebook.com/mquarne" target="_blank" rel="noopener">
				<FaFacebookF />
			</a>
			<a
				href="https://www.instagram.com/trulyqsstyle/"
				target="_blank"
				rel="noopener"
			>
				<FaInstagram />
			</a>
		</div>
	)
}
