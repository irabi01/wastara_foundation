import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import wastaraLogo from '../images/logo.png'


class NavigationComponent extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top navigation">
        <Link className="navbar-brand" to="/">
            <img src={wastaraLogo} className="img-fluid" alt="wastara-logo"/>
        </Link>
        <button className="navbar-toggler cpBtn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <div></div>
            <div></div>
            <div></div>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/events">Events</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            </ul>
        </div>
        </nav>
      </div>
    )
  }
}

export default NavigationComponent
