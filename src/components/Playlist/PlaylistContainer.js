import React, {Component} from 'react'
import axios from 'axios';
import { API_URL } from '../../constant';
import PlaylistModal from '../Modal/PlaylistModal';
import Playlist from './Playlist';
import './PlaylistContainer.css'

class PlaylistContainer extends Component {
  state = {
    isModalOpen: false,
    playlists:[]
  }

  componentDidMount() {
    const currentUser = localStorage.getItem('uid');
    axios.get(`${API_URL}/playlist/userPlaylist/${currentUser}`)
    .then(res => {
      this.setState({playlists:res.data.data})
    }).catch(err => console.log(err));
  }

  closeModal = () => {
    this.setState({isModalOpen:false});
  }

  createPlaylist = name => {
    axios.post(`${API_URL}/playlist/add`,name)
    .then(res => {
      let playlists = this.state.playlists;
      playlists.push(res.data.data);
      this.setState({playlists});
    }).catch(err => console.log(err));
  }

  removePlaylist = (id) => {
    axios.delete(`${API_URL}/playlist/delete/${id}`)
    .then(res => {
      let playlists = this.state.playlists.filter( playlist => playlist._id !== res.data.data._id);
      this.setState({playlists});
    }).catch(err => console.log(err));
  }

  renderPlaylists = () => {
    let playlist = this.state.playlists.map( playlist =>
        <Playlist playlist={playlist} playPlaylist={this.props.playPlaylist} removePlaylist={this.removePlaylist} redirect={this.props.redirect}/>
    )
    return playlist
  }

  render() {
    return(
      <div className="playlistContainer">
        <h1>Playlist</h1>
        <button type="button" onClick={()=> this.setState({isModalOpen:true})}> <i className="fa fa-plus-square-o" aria-hidden="true"></i> Add playlist</button>
        <PlaylistModal closeModal={this.closeModal} isModalOpen={this.state.isModalOpen} createPlaylist={this.createPlaylist}/>
        <div className="playlists">
        {this.renderPlaylists()}
        </div>
      </div>
    )
  }
}

export default PlaylistContainer;
