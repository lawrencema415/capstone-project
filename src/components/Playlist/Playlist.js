import React, {Component} from 'react'
import axios from 'axios';
import { API_URL } from '../../constant';
import PlaylistModal from '../Modal/PlaylistModal';
class Playlist extends Component {
  state = {
    value: '',
    isModalOpen: false
  }

  handleChange = (event) => {
    this.setState({value:event.target.value});
  };

  handleSubmit = (event) => {

  }

  componentDidMount() {
    axios.get(`${API_URL}/playlist/index`)
    .then(res => {
      this.props.updatePlaylist(res.data.data)
    }).catch(err => console.log(err));
  }

  closeModal = () => {
    this.setState({isModalOpen:false});
  }

  render() {
    return(
      <div className="playlist">
        Playlist is here!
        <form>
        <input type="text" name="name" onChange={this.handleChange} placeholder="New playlist name.."/>
        <button type="button" onClick={()=> this.setState({isModalOpen:true})}>Add playlist</button>
        <PlaylistModal closeModal={this.closeModal} isModalOpen={this.state.isModalOpen}/>

        </form>
      </div>
    )
  }
}

export default Playlist;
