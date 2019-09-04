import React, {Component} from 'react'
import './NavBar.css';
class NavBar extends Component {
  render() {
    return(
      <div class="navbar">
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
          <li>Log out</li>
          <li>User</li>
        </ul>
      </div>
    )
  }
}

export default NavBar;
