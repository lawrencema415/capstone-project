import React,{Component} from 'react';
import './Featured.css';
import PlaylistModal from "../Modal/PlaylistModal"

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
        {this.props.renderArtists()}
      </div>
    )
  }
}

export default Featured;
