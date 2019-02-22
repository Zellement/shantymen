import React from "react"
import { Link } from 'gatsby'
import logo from '../img/logo-badge.png'
import logo_text from '../img/logo-text.png'

const Logo = () => (
	<Link to="/" className="logo" title="Logo">
		<img className="logo__image" src={logo} alt="Sheringham Shantymen Badge" />
		<img className="logo__text" src={logo_text} alt="The Sheringham Shantymen" />
	</Link>
)

export default Logo