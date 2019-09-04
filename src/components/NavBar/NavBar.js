import React, {Component} from 'react'
import './NavBar.css';
class NavBar extends Component {
  render() {
    return(
      <div class="navbar">
        <ul>
          <li>Logo</li>
          <li>Home</li>
          <li>Search</li>
          <li>Playlist</li>
          <li>Log out</li>
          <li>User</li>
        </ul>
      </div>
    )
  }
}

export default NavBar;
