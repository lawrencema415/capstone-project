import React, {Component} from 'react'
import axios from 'axios';
import { API_URL } from '../../constant';
import PlaylistModal from '../Modal/PlaylistModal';
class Playlist extends Component {
  state = {
    value: '',
    isModalOpen: false,
    playlists:[]
  }

  componentDidMount() {
    axios.get(`${API_URL}/playlist/index`)
    .then(res => {
      // this.props.updatePlaylist(res.data.data)
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

  renderPlaylists = () => {
    let playlists = this.state.playlists.map( playlist => <div id={playlist._id}>{playlist.name}</div> )
    return (
      <h1>playlists here</h1>
    )
  }


  render() {
    return(
      <div className="playlist">
        <h1>Playlist</h1>
        <PlaylistModal closeModal={this.closeModal} isModalOpen={this.state.isModalOpen} createPlaylist={this.createPlaylist}/>
        <button type="button" onClick={()=> this.setState({isModalOpen:true})}>Add playlist</button>
        {this.renderPlaylists}
      </div>
    )
  }
}

export default Playlist;
