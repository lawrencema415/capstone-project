import React, {Component} from 'react'
import axios from 'axios';
import { API_URL } from '../../constant';
import PlaylistModal from '../Modal/PlaylistModal';
import Playlists from './Playlists';
import './PlaylistContainer.css'

class PlaylistContainer extends Component {
  state = {
    value: '',
    isModalOpen: false,
    playlists:[]
  }

  componentDidMount() {
    axios.get(`${API_URL}/playlist/index`)
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

  render() {
    return(
      <div className="playlistContainer">
        <h1>Playlist</h1>
        <button type="button" onClick={()=> this.setState({isModalOpen:true})}> <i className="fa fa-plus-square-o" aria-hidden="true"></i> Add playlist</button>
        <PlaylistModal closeModal={this.closeModal} isModalOpen={this.state.isModalOpen} createPlaylist={this.createPlaylist}/>
        <div className="playlists">
          <Playlists playlists={this.state.playlists} removePlaylist={this.removePlaylist} playPlaylist={this.props.playPlaylist}/>
        </div>
      </div>
    )
  }
}

export default PlaylistContainer;
