import React, {Component} from 'react';
import axios from 'axios';
import { API_URL } from '../../constant';
import NavBar from '../NavBar/NavBar';
import PlaylistContainer from '../Playlist/PlaylistContainer';
import Search from '../Search/Search';
import MusicPlayerContainer from '../MusicContainer/MusicPlayerContainer';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import './Home.css';
import Routes from '../../config/routes';
import Featured from '../Pages/Featured';
class Home extends Component {
  state = {
    isPlaying: false,
    songs: [],
    currentUser: null,
    albums: [],
    song: null,
    currentPlaylist: {Songs:[]},
    loop: false
  };

  togglePlay = (select) => {
    if(select === true) {
      if(this.state.isPlaying === true) {
        return;
      } else {
        this.setState({isPlaying:true});
      }
    }
    if(this.state.song !== null) {
      this.state.isPlaying ? this.setState({isPlaying:false}) : this.setState({isPlaying:true});
    }
  }

  toggleLoop = () => {
    this.state.loop ? this.setState({loop:false}) : this.setState({loop:true});
  }

  logout = () => {
    axios.post(`${API_URL}/auth/logout`, {withCredentials: true})
    .then(res => {
      this.setState({ currentUser: null});
      this.props.history.push('/us');
      localStorage.removeItem('uid');
    })
    .catch(err => console.log(err));
  };

  getData = async(id) => {
    const songs = await axios.get(`${API_URL}/song/index`)
    const albums = await axios.get(`${API_URL}/album/index`)
    const user = await axios.get(`${API_URL}/auth/show/${id}`)
    this.setState({songs: songs.data.data, albums: albums.data.data, currentUser:user.data.data})
  }

// Temp set song descriptions, need to change later
  setCurrentSong = (song) => {
    this.setState({song});
  }

  componentDidMount() {
    const currentUser = localStorage.getItem('uid');
    this.getData(currentUser);
  };

  playNext = () => {
    let playlist = this.state.currentPlaylist;
    for(let i = 0;i < playlist.Songs.length;i++) {
      if(playlist.Songs[i].name === this.state.song.name) {
        if(!this.state.loop && i === playlist.Songs.length - 1) {
          this.setCurrentSong(null);
          this.togglePlay();
          return;
        }
        if(i === playlist.Songs.length - 1) {
          this.setCurrentSong(playlist.Songs[0]);
          this.togglePlay();
          return;
        } else {
          this.setCurrentSong(playlist.Songs[i+1]);
          this.togglePlay(true);
          return;
        }
      }
    }

  }

  addToQueue = song => {
    let playlist = this.state.currentPlaylist;
    if(this.state.song === null) {
      this.setCurrentSong(song);
      this.togglePlay()
      return ;
    }
    playlist.Songs.push(song)
    this.setState({currentPlaylist:playlist});
  }

  playPrev = () => {
    let playlist = this.state.currentPlaylist;
    for(let i = playlist.Songs.length - 1;i > 0;i--) {
      if(playlist.Songs[i].name === this.state.song.name) {
        if(!this.state.loop && i === 0) {
          this.setCurrentSong(null);
          this.togglePlay();
          return;
        }
        if(i === 0) {
          this.setCurrentSong(playlist.Songs[playlist.Songs.length - 1]);
          this.togglePlay();
          return;
        } else {
          this.setCurrentSong(playlist.Songs[i-1]);
          this.togglePlay(true);
          return;
        }
      }
    }

  }

  playPlaylist = playlist => {
    this.setState({currentPlaylist:playlist});
    this.setState({song:playlist.Songs[0]});
    this.togglePlay(true);
  }

  render() {
    return (
      <div className="container">
        <div className="navbar"> <NavBar  isPlaying={this.state.isPlaying} logout={this.logout} currentUser={this.state.currentUser}/> </div>
        <Switch>
          <Route exact path='/browse/search' render={() => <Search songs={this.state.songs} setCurrentSong={this.setCurrentSong} togglePlay={this.togglePlay}
          />} />
          <Route exact path='/browse/playlist' render={() => <PlaylistContainer playPlaylist={this.playPlaylist}/>} />
          <Route exact path='/browse' render={() => <Featured />} />
        </Switch>
        <div className="music-control-container">
          <MusicPlayerContainer
            isPlaying={this.state.isPlaying} togglePlay={this.togglePlay} song={this.state.song} playNext={this.playNext} playPrev={this.playPrev}
            toggleLoop={this.toggleLoop}
          />
        </div>
      </div>
    );
  };
};

export default Home;
