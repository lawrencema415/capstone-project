import React from 'react'
import './NavBar.css';
import { Link } from 'react-router-dom';
const NavBar = props => {
  return(
    <div className="navbar">
      <ul>
        <li id="logo">Spotafly</li>
        <Link to="/browse">
          <li className="top-nav nav">
            <i className="fa fa-home" aria-hidden="true" ></i> Home
            </li>
        </Link>
        <Link to="/browse/search">
          <li className="top-nav nav">
            <i className="fa fa-search" aria-hidden="true"></i> Search
          </li>
        </Link>
        <Link to="/browse/playlist">
          <li className="top-nav nav">
            <i className="fa fa-music" aria-hidden="true"></i> Your library
          </li>
        </Link>

        <div className="line-break"></div>
        <li id="logout" className="bot-nav nav" onClick={() => {props.logout()}}>
          Logout
        </li>
        <li className="bot-nav nav"> <i className="fa fa-user" aria-hidden="true"></i> {props.currentUser && props.currentUser.name} </li>
      </ul>
    </div>
  )
}


export default NavBar;
