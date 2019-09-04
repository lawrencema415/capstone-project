import React, {Component} from 'react';
import axios from 'axios';
import { API_URL } from '../../constant';
import NavBar from '../NavBar/NavBar';
import Search from '../Search/Search';
import MusicPlayer from '../MusicPlayer/MusicPlayer';
import './Home.css';

class Home extends Component {
  state = {
    play: false,
    songs: [],
    currentUser: null,
    currentTab: "Home",
  };

  componentDidMount() {
    const currentUser = localStorage.getItem('uid');
    this.setState({currentUser});
    axios.get(`${API_URL}/song/index`)
    .then(res => {
      this.setState({songs:res.data.data})
    }).catch(err => console.log(err));
  };

  renderItem() {
    if(this.state.currentTab === "Home") {
      return (
        <h1>Home</h1>
      )
    }
    if(this.state.currentTab === "Search") {
      return (
        <Search songs={this.state.songs}/>
      )
    }
    if(this.state.currentTab === "Playlist") {
      return (
        <h1>Playlist</h1>
      )
    }
  }

  changeTab = (name) => {
    this.setState({currentTab:name});
  };

  render() {
    console.log("render");
    return (
      <div class="container">
        <NavBar changeTab={this.changeTab} />
        {this.renderItem()}
        <MusicPlayer />
      </div>
    );
  };

};

export default Home;
