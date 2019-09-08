import React, {Component} from 'react';
import './MusicControl.css';


class MusicControl extends Component {
  constructor() {
    super();
    this.state = {
      isPlaying:false,
      progress:0,
      dragProgressBar:false,
      loop:false,
      volume: 1,
      isMuted: false
    }
    this.progressInChange =  false;
    this.interval = setInterval(this.update,1000);
  }

  update = () => {
    let player = this.refs.player;
    if(this.refs.player) {
      if(!this.progressInChange) {
        this.setState({
          progress: player.currentTime / player.duration
        });
      }
    }
    if(player.ended) {

    }
  }

  togglePlay = () => {
    this.state.isPlaying ? this.setState({isPlaying:false}) : this.setState({isPlaying:true});
  }

  toggleMute = () => {
    this.state.isMuted ? this.setState({isMuted:false}) : this.setState({isMuted:true});
  }

  progressBarActivate = e => {
    this.setState({dragProgressBar:true});
    this.setTime(e);
  }

  stopDrag = e => {
    this.setState({dragProgressBar:false});
  }

  setTime = (e) => {
    if(this.state.dragProgressBar) {
      let progress = ((e.clientX - offsetLeftConvert(this.refs.progress_bar)) / this.refs.progress_bar.clientWidth);
      this.setState({progress});
      this.progressInChange = true
    }
  }

  render() {
    let currentTime = 0;
    let totalTime = 0;
    if(this.refs.player) {
      let player = this.refs.player;
      player.loop = this.state.loop;

      if(player.currentSrc !== this.props.currentSong) {
        player.src = this.props.currentSong;
      }

      if(player.paused && !player.ended) {
        if(this.state.isPlaying) {
          player.play();
        }
      } else if (!this.state.isPlaying) {
        player.pause();
      }

      if(this.state.isMuted) {
        player.volume = 0;
      } else {
        player.volume = this.state.volume;
      }

      if(this.progressInChange) {
        this.progressInChange = false;
        player.currentTime = player.duration * this.state.progress;
      }

      currentTime = player.currentTime;
      totalTime = player.duration;

    }

    let playerClassName = {
      "fa fa-play": !this.state.isPlaying,
      "fa fa-pause": this.state.isPlaying
    };

    let muteClassName = {
        "fa fa-volume-up": !this.state.isMuted,
        "fa fa-volume-off": this.state.isMuted
    }

    return (
      <div className="player">
        <div className="audio-controls">
          <a onClick={() => {}}><i className="fa fa-chevron-left" aria-hidden="true"></i></a>
          <a onClick={this.togglePlay}><i className={toggleClassName(playerClassName)} aria-hidden="true"></i></a>
          <a onClick={() => {}}><i className="fa fa-chevron-right" aria-hidden="true"></i></a>

          <div className="timeStamp"> {convertTime(currentTime)} / {convertTime(totalTime)} </div>
        </div>
        <div className="progress" onMouseDown={this.progressBarActivate} onMouseMove={this.setTime} onMouseLeave={() => this.setState({dragProgressBar:false})} onMouseUp={this.stopDrag}>
          <div ref="progress_bar" className="bar">
          <div style={{width: (this.state.progress * 100) + "%" }}></div>
          </div>
        </div>
        <audio ref="player" autoplay={this.state.isPlaying}>
          <source src={this.props.currentSong}/>
        </audio>

        <a onClick={this.toggleMute}><i className={toggleClassName(muteClassName)} aria-hidden="true"></i></a>

      </div>
    );
  }
};

function toggleClassName(obj) {
  let css = [];
  Object.keys(obj).forEach(key => obj[key] && css.push(key));
  return css.join('');
}

function convertTime(time) {
  if(!time) {
    return ''
  }
  let minutes = Math.floor(time % 3600 / 60);
  let seconds = Math.floor(time % 3600 % 60);
  if(seconds < 10) {
    seconds = "0" + seconds
  }

  return minutes + ":" + seconds;
}

// Patrick Lorio youtube tutorial
function offsetLeftConvert(ele) {
  let left = 0;
  while(ele && ele !== document) {
    console.log(document);
    left += ele.offsetLeft;
    ele = ele.offsetParent;
  }
  return left;
}

export default MusicControl;
