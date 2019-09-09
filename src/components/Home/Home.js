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

  getData = () => {
    axios.get(`${API_URL}/song/index`)
    .then(res => {
      this.setState({songs:res.data.data})
    }).catch(err => console.log(err));

    axios.get(`${API_URL}/album/index`)
    .then(res => {
      this.setState({albums:res.data.data})
    }).catch(err => console.log(err));
  }
  getUserInfo = id => {
    axios.get(`${API_URL}/auth/show/${id}`)
    .then(res => {
      this.setState({currentUser:res.data.data})
    }).catch(err => console.log(err));
  }

// Temp set song descriptions, need to change later
  setCurrentSong = song => {
    this.setState({currentSong:song});
  }
  setCurrentSongImg = img => {
    this.setState({currentSongImg:img});
  }
  setCurrentSongName = name => {
    this.setState({currentSongName:name});
  }

  componentDidMount() {
    const currentUser = localStorage.getItem('uid');
    this.getUserInfo(currentUser);
    this.getData();
  };

  renderItem() {
    if(this.state.currentTab === "Home") {
      return (
        <>
        <h1>Top hits</h1>
        </>
      )
    }
    if(this.state.currentTab === "Search") {
      return (
        <Search songs={this.state.songs} setCurrentSong={this.setCurrentSong} setCurrentSongImg={this.setCurrentSongImg} setCurrentSongName={this.setCurrentSongName} />
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
        <div className="navbar"> <NavBar changeTab={this.changeTab} logout={this.logout} currentUser={this.state.currentUser}/> </div>
        <div className="content"> {this.renderItem()} </div>
        <div className="music-control-container">
          <MusicPlayerContainer
            currentSong={this.state.currentSong} currentSongImg={this.state.currentSongImg}
            currentSongName={this.state.currentSongName}
          />
        </div>
      </div>
    );
  };

};

export default Home;
