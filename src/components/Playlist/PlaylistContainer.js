import React, {Component} from 'react'
import axios from 'axios';
import { API_URL } from '../../constant';
import PlaylistModal from '../Modal/PlaylistModal';
import Playlists from './Playlists';
class PlaylistContainer extends Component {
  state = {
    value: '',
    isModalOpen: false,
    playlists:[]
  }

  componentDidMount() {
    axios.get(`${API_URL}/playlist/index`)
    .then(res => {
      console.log(res.data.data);
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

  render() {
    return(
      <div className="playlist">
        <h1>Playlist</h1>
        <PlaylistModal closeModal={this.closeModal} isModalOpen={this.state.isModalOpen} createPlaylist={this.createPlaylist}/>
        <button type="button" onClick={()=> this.setState({isModalOpen:true})}>Add playlist</button>
        <Playlists playlists={this.state.playlists}/>
      </div>
    )
  }
}

export default PlaylistContainer;
