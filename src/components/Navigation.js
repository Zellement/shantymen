import React from 'react'
import { Link } from 'gatsby'

const Navigation = class extends React.Component {

  state = { showMenu : false }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
 
  render() {
    const menuActive = this.state.showMenu ? 'is-active' : '';
    const burgerActive = this.state.showMenu ? 'is-active' : '';
    return (     
    <nav className="navigation">
      <div className={`navigation__menu ${menuActive}`} >
        <div className="navigation__inside">
          <Link className="navigation__item" activeClassName="active" to="/">
            Home
          </Link>
          <Link className="navigation__item" activeClassName="active" to="/blog">
           Blog
          </Link>
          <Link className="navigation__item" activeClassName="active" to="/about">
            About
          </Link>
          <Link className="navigation__item" activeClassName="active" to="/oddfellows-hall">
            Oddfellows Hall
          </Link>
          <Link className="navigation__item" activeClassName="active" to="/discography">
            Discography
          </Link>
          <Link className="navigation__item" activeClassName="active" to="/gigs">
            Gigs
          </Link>
          <Link className="navigation__item" activeClassName="active" to="/guestbook">
            Guestbook
          </Link>
          <Link className="navigation__item" activeClassName="active" to="/gallery">
            Gallery
          </Link>
          <Link className="navigation__item" activeClassName="active" to="/book-us">
            Book Us
          </Link>
        </div>
      </div>
      <div className={`navigation__burger burger ${burgerActive}`} onClick={this.toggleMenu}>
        <div className={`navigation__burger-inside ${burgerActive}`}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )}
}

export default Navigation
