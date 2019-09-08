import React, {Component} from 'react';
import axios from 'axios';
import { API_URL } from '../../constant';
import NavBar from '../NavBar/NavBar';
import PlaylistContainer from '../Playlist/PlaylistContainer';
import Search from '../Search/Search';
import MusicPlayerContainer from '../MusicContainer/MusicPlayerContainer';
import './Home.css';

class Home extends Component {
  state = {
    play: false,
    songs: [],
    currentUser: null,
    currentTab: "Home",
    albums: [],
    currentSong:"https://spotify-clone.s3-us-west-1.amazonaws.com/Illenium+-+Ashes/03-With+You+(feat.+Quinn+XCII).mp3",
    currentSongImg:"https://spotify-clone.s3-us-west-1.amazonaws.com/Ozuna+-+Aura/Front+Cover.jpg",
    currentSongName:"With You"
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

  setCurrentSong = song => {
    this.setState({currentSong:song});
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
        <Search songs={this.state.songs} setCurrentSong={this.setCurrentSong}/>
      )
    }
    if(this.state.currentTab === "Playlist") {
      return (
        <PlaylistContainer setCurrentSong={this.setCurrentSong}/>
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
        <div className="music-control-container"> <MusicPlayerContainer currentSong={this.state.currentSong} currentSongImg={this.state.currentSongImg} currentSongName={this.state.currentSongName}/> </div>
      </div>
    );
  };

};

export default Home;
