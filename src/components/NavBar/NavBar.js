import React, {Component} from 'react'
import './NavBar.css';
class NavBar extends Component {
  render() {
    return(
      <div className="navbar">
        <ul>
          <li id="logo">Musiq</li>
          <li className="top-nav nav" onClick={() => {this.props.changeTab("Home")}}>
            <i class="fa fa-home" aria-hidden="true"></i> Home
          </li>
          <li className="top-nav nav" onClick={() => {this.props.changeTab("Search")}}>
            <i class="fa fa-search" aria-hidden="true"></i> Search
          </li>
          <li className="bot-nav nav" onClick={() => {this.props.changeTab("Playlist")}}>
            <i class="fa fa-music" aria-hidden="true"></i> Your library
            </li>

          <li className="bot-nav nav" onClick={() => {this.props.logout()}}>
            Logout
          </li>
          <li className="bot-nav nav">User</li>
        </ul>
      </div>
    )
  }
}

export default NavBar;
