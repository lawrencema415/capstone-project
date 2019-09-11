import React, {Component} from 'react'
import MusicDetail from './MusicDetail';
import MusicControl from './MusicControl';
import VolumeControl from './VolumeControl';
class MusicPlayerContainer extends Component {

  // <div className="controllers"> <VolumeControl /> </div>
  render() {
    return(
      <>
        <div className="pic"> <MusicDetail song={this.props.song} /> </div>
        <MusicControl togglePlay={this.props.togglePlay} isPlaying={this.props.isPlaying} song={this.props.song} playNext={this.props.playNext}
        playPrev={this.props.playPrev} toggleLoop={this.props.toggleLoop} loop={this.props.loop}
        />
      </>
    )
  }
}

export default MusicPlayerContainer;
