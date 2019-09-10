import React from 'react'
import './NavBar.css';
import { Link } from 'react-router-dom';
const NavBar = props => {
  return(
    <div className="navbar">
        <div className="top">
          <li id="logo">
            <img src="https://spotify-clone.s3-us-west-1.amazonaws.com/favicon-32x32.png" alt="logo"/>
            Spotafly
          </li>
          <Link to="/">
            <li className="top-nav nav">
              <i className="fa fa-home" aria-hidden="true" ></i> Home
              </li>
          </Link>
          <Link to="/search">
            <li className="top-nav nav">
              <i className="fa fa-search" aria-hidden="true"></i> Search
            </li>
          </Link>
          <Link to="/playlists">
            <li className="top-nav nav">
              <i className="fa fa-music" aria-hidden="true"></i> Your library
            </li>
          </Link>
        </div>
          <div className="bottom">
          <div className="line-break"></div>
          <li id="logout" className="bot-nav nav" onClick={() => {props.logout()}}>
            Logout
          </li>
          <li className="bot-nav nav"> <i className="fa fa-user" aria-hidden="true"></i> {props.currentUser && props.currentUser.name} </li>
        </div>
    </div>
  )
}


export default NavBar;
