import React, {Component} from 'react'
import axios from 'axios';
import { API_URL } from '../../constant';
class Playlist extends Component {
  state = {
    value: '',
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

  render() {
    return(
      <div className="playlist">
        Playlist is here!
        <form>
        <input type="text" name="name" onChange={this.handleChange} placeholder="New playlist name.."/>
        <button type="submit">Add playlist</button>
        </form>
      </div>
    )
  }
}

export default Playlist;
