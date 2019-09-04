import React, {Component} from 'react'
import './NavBar.css';
class NavBar extends Component {
  render() {
    return(
      <div className="navbar">
        <ul>
          <li>Logo</li>
          <li>
            <button onClick={() => {this.props.changeTab("Home")}}>Home</button>
          </li>
          <li>
            <button onClick={() => {this.props.changeTab("Search")}}>Search</button>
          </li>
          <li>
            <button onClick={() => {this.props.changeTab("Playlist")}}>Playlist</button>
            </li>
          <li>
            <button onClick={() => {this.props.logout()}}>Logout</button>
          </li>
          <li>User</li>
        </ul>
      </div>
    )
  }
}

export default NavBar;
