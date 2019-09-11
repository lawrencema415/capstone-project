import React, {Component} from 'react'
import AddSongModal from '../Modal/AddSongModal';
import axios from 'axios';
import { API_URL } from '../../constant';

class Result extends Component {
  state = {
    isModalOpen:false,
    playlists:[]
  }

  componentDidMount() {
    let uid = localStorage.getItem('uid')
    axios.get(`${API_URL}/playlist/userPlaylist/${uid}`)
    .then(res => {
      this.setState({playlists:res.data.data});
    }).catch(err => console.log(err));
  };

  renderSongs() {
    let songs = this.props.results.map( song => {
        return (
          <div key={song._id}>
          <h3>{song.name}</h3>
          <h4>{song.artist}</h4>
          <button type="button" onClick={() => {this.setState({isModalOpen:true,selectedSong:song})}}><i className="fa fa-plus" aria-hidden="true"></i></button>
          <button type="button" onClick={() => {
              this.props.setCurrentSong(song);
              this.props.togglePlay(true);
            }}>
            <i className="fa fa-music" aria-hidden="true"></i>
          </button>
          </div>
        )
    })
    if (this.props.value !== "" && this.props.found == false) {
      return (
        <div className="description">
          <h2>No result found for "{this.props.value}"</h2>
          <h3>Please make sure your words are spelled correctly or use less or different keywords.</h3>
        </div>
      )
    }
    if (this.props.results.length <= 0) {
      return (
        <div className="description">
        <h2>Search Spotafly</h2>
        <h3>Find your favorite songs, artists, albums and playlists.</h3>
        </div>
      )
    }
    return songs;
  }

  closeModal = () => {
    this.setState({isModalOpen:false});
  }

  addSong = (playlist,song) => {
    axios.put(`${API_URL}/playlist/addSong/${playlist}`,song)
    .then(res => {
    }).catch(err => console.log(err));
  }

  render() {
    return(
      <div className="results">
        {this.renderSongs()}
        <AddSongModal
          closeModal={this.closeModal} isModalOpen={this.state.isModalOpen} selectedSong={this.state.selectedSong}
          addSong={this.addSong} songs={this.props.results} playlists={this.state.playlists}
        />
      </div>
    )
  }
}

export default Result;
