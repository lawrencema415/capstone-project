import React, {Component} from 'react';
import axios from 'axios';
import { API_URL } from '../../constant';
import NavBar from '../NavBar/NavBar';
import PlaylistContainer from '../Playlist/PlaylistContainer';
import Search from '../Search/Search';
import MusicPlayer from '../MusicContainer/MusicPlayer';
import './Home.css';

class Home extends Component {
  state = {
    play: false,
    songs: [],
    currentUser: null,
    currentTab: "Home",
    albums:[]
  };

  logout = () => {
    axios.post(`${API_URL}/auth/logout`, {withCredentials: true})
    .then(res => {
      this.setState({ currentUser: null});
      this.props.history.push('/us');
      localStorage.removeItem('uid');
    })
    .catch(err => console.log(err));
  };

  updateAlbums = albums => {
    this.setState({albums})
  }

  getSongs = () => {
    axios.get(`${API_URL}/song/index`)
    .then(res => {
      this.setState({songs:res.data.data})
    }).catch(err => console.log(err));
  }

  componentDidMount() {
    const currentUser = localStorage.getItem('uid');
    this.setState({currentUser});
    this.getSongs();
  };

  renderItem() {
    if(this.state.currentTab === "Home") {
      return (
        <>
        <h1>Home</h1>
        </>
      )
    }
    if(this.state.currentTab === "Search") {
      return (
        <Search songs={this.state.songs}/>
      )
    }
    if(this.state.currentTab === "Playlist") {
      return (
        <PlaylistContainer />
      )
    }
  }

  changeTab = (name) => {
    this.setState({currentTab:name});
  };

  render() {
    console.log("render");
    return (
      <div className="container">
        <div className="navbar"> <NavBar changeTab={this.changeTab} logout={this.logout} /> </div>
        <div className="content"> {this.renderItem()} </div>
        <div className="musicplayer"> <MusicPlayer /> </div>
      </div>
    );
  };

};

export default Home;
