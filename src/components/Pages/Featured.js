import React,{Component} from 'react';
import './TopHits.css';
import PlaylistModal from "../Modal/PlaylistModal"
import Playlists from '../Playlist/Playlists.js'

class Featured extends Component{
  state = {
    currentTab:"features"
  }

  tabHandling = (tab) => {
    this.setState({currentTab: tab})
  }
  render() {
    return (
      <div className="homeContainer">
        <div className="selections">
          <a onClick={()=> this.tabHandling('features')}>Features</a>
          <a onClick={()=> this.tabHandling('newReleases')}>New Releases</a>
          <a onClick={()=> this.tabHandling('discover')}>Discover </a>
        </div>
      </div>
    )
  }
}

export default Featured;
