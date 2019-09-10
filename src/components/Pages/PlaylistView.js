import React,{Component} from 'react';
import axios from 'axios';
import { API_URL } from '../../constant';

class PlaylistView extends Component {
  state = {
    data:{}
  }

  componentDidMount() {
    axios.get(`${API_URL}/playlist/view/${this.props.id}`)
    .then(res => {
      this.setState({ data: res});
    })
    .catch(err => console.log(err));
  }

  render() {
    return(
      <div className="playlistContainer">
      <h1>Here is the playlist</h1>
      </div>
    )
  }
}

export default PlaylistView;
