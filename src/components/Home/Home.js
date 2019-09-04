import React, {Component} from 'react';
import axios from 'axios';
import { API_URL } from '../../constant';
import NavBar from '../NavBar/NavBar';
import MusicPlayer from '../MusicPlayer/MusicPlayer';

class Home extends Component {
  state = {
    play: false,
    songs: []
  };

  componentDidMount() {
    const currentUser = localStorage.getItem('uid');
    axios.get(`${API_URL}/song/index`)
    .then(res => {
      this.setState({songs:res.data.data})
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <NavBar />
        Home page
        <MusicPlayer />
      </div>
    );
  };

};

export default Home;
