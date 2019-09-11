import React,{Component} from 'react';
import axios from 'axios';
import { API_URL } from '../../constant';
import './view.css';

class ArtistView extends Component {
  state = {
    artist:null,
    isHovered:false
  }

  componentDidMount() {
    axios.get(`${API_URL}/artist/view/${this.props.id}`)
    .then(res => {
      this.setState({ artist: res.data.data});
    })
    .catch(err => console.log(err));
  }

  renderSongs() {
    if(this.state.artist.songs) {
      let songs = this.state.artist.songs.map( song => {
          return (
            <div key={song._id} className="song">
                <h3>{song.name}</h3>
                <button type="button" onClick={() => {
                  this.props.setCurrentSong(song);
                  this.props.togglePlay(true);
                }}><i className="fa fa-music" aria-hidden="true"></i></button>
            </div>
          )
      })
      return songs;
    }
  }

  closeModal = () => {
    this.setState({isModalOpen:false});
  }


  render() {
    return(
      <div className="view-container">
        <div className="left-container">
          {this.state.artist && <img src={this.state.artist.picture}/>}
          <h1>{this.state.artist && this.state.artist.name}</h1>
          <button className="select-button" onClick={() => this.props.playPlaylist(this.state.artist.songs)}>PLAY</button>
        </div>
        <div className="right-container">
        {this.state.artist && this.renderSongs()}
        </div>
      </div>
    )
  }
}

export default ArtistView;
