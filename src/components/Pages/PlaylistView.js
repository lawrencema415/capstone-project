import React,{Component} from 'react';
import axios from 'axios';
import { API_URL } from '../../constant';
import './view.css';
import EditModal from '../Modal/EditModal';

class PlaylistView extends Component {
  state = {
    playlist:{},
    isHovered:false,
    isModalOpen: false
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
                <button type="button"><i className="fa fa-music" aria-hidden="true"></i></button>
            </div>
          )
      })

      return songs;
    }
  }

  updateStatePlaylist = name => {
    let playlist = this.state.playlist;
    playlist.name = name;
    this.setState({playlist});
  }

  closeModal = () => {
    this.setState({isModalOpen:false});
  }

  playlistPicture = () => {
    if(this.state.playlist.Songs.length < 1) {
      return 'https://spotify-clone.s3-us-west-1.amazonaws.com/empty_playlist.jpg'
    } else {
      return this.state.playlist.Songs[0].picture;
    }
  }

  checkUser = () => {
    const currentUser = localStorage.getItem('uid');
    if(currentUser === this.state.playlist.user) {
      return true;
    } else {
      return false;
    }
  }

  editPlaylistName = name => {
    axios.put(`${API_URL}/playlist/editName/${this.state.playlist._id}`,name)
    .then(res => {
      let playlists = res.data.data;
      this.setState({playlists});
    }).catch(err => console.log(err));
  }

  render() {
    return(
      <div className="view-container">
        <EditModal closeModal={this.closeModal} isModalOpen={this.state.isModalOpen} editPlaylistName={this.editPlaylistName} value={this.state.value} updateStatePlaylist={this.updateStatePlaylist}/>
        <div className="left-container">
          {this.state.playlist.Songs && <img src={this.playlistPicture()}/>}
          <h1>{this.state.playlist.name}</h1>
          <h5>{this.state.playlist.user}</h5>
          <button className="select-button" onClick={() => this.props.playPlaylist(this.state.playlist)}>PLAY</button>
          {this.checkUser() && <button className="select-button" onClick={()=> this.setState({isModalOpen:true})}>Edit</button>}
        </div>
        <div className="right-container">
        {this.state.playlist.Songs && this.renderSongs()}
        </div>
      </div>
    )
  }
}

export default PlaylistView;
