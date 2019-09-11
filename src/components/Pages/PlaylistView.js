import React,{Component} from 'react';
import axios from 'axios';
import { API_URL } from '../../constant';
import './view.css';

class PlaylistView extends Component {
  state = {
    playlist:{},
    isHovered:false
  }

  componentDidMount() {
    axios.get(`${API_URL}/playlist/view/${this.props.id}`)
    .then(res => {
      this.setState({ playlist: res.data.data});
    })
    .catch(err => console.log(err));
  }

  renderSongs() {
    if(this.state.playlist.Songs) {
      let songs = this.state.playlist.Songs.map( song => {
          return (
            <div key={song._id} className="song">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
                <button type="button"><i class="fa fa-music" aria-hidden="true"></i></button>
            </div>
          )
      })

      return songs;
    }
  }


  render() {
    return(
      <div className="view-container">
        <div className="left-container">
          <img src={this.state.playlist.Songs && this.state.playlist.Songs[0].picture}/>
          <h1>{this.state.playlist.name}</h1>
          <h5>{this.state.playlist.user}</h5>
        </div>
        <div className="right-container">
        {this.state.playlist.Songs && this.renderSongs()}
        </div>
      </div>
    )
  }
}

export default PlaylistView;
