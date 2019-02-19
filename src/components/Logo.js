import React from "react"
import { Link } from 'gatsby'
import logo from '../img/logo-badge.png'
import '../scss/layout/logo.scss'

const Logo = () => (
	<Link to="/" className="logo" title="Logo">
		<img className="logo__image" src={logo} alt="Sheringham Shantymen" />
	</Link>
)

export default Logo