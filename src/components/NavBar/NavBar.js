import React, {Component} from 'react'
import './NavBar.css';
class NavBar extends Component {
  render() {
    return(
      <div className="navbar">
        <ul>
          <li id="logo">Musiq</li>
          <li className="top-nav nav" onClick={() => {this.props.changeTab("Home")}}>
            <i className="fa fa-home" aria-hidden="true"></i> Home
          </li>
          <li className="top-nav nav" onClick={() => {this.props.changeTab("Search")}}>
            <i className="fa fa-search" aria-hidden="true"></i> Search
          </li>
          <li className="top-nav nav" onClick={() => {this.props.changeTab("Playlist")}}>
            <i className="fa fa-music" aria-hidden="true"></i> Your library
            </li>
          <div className="line-break"></div>
          <li id="logout" className="bot-nav nav" onClick={() => {this.props.logout()}}>
            Logout
          </li>
          <li className="bot-nav nav"> <i className="fa fa-user" aria-hidden="true"></i> {this.props.currentUser && this.props.currentUser.name} </li>
        </ul>
      </div>
    )
  }
}

export default NavBar;
