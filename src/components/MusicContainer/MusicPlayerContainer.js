import React, {Component} from 'react'
import MusicDetail from './MusicDetail';
import MusicControl from './MusicControl';
import VolumeControl from './VolumeControl';
class MusicPlayerContainer extends Component {

  render() {
    return(
      <>
        <div className="pic"> <MusicDetail song={this.props.song} /> </div>
        <MusicControl togglePlay={this.props.togglePlay} isPlaying={this.props.isPlaying} song={this.props.song} playNext={this.props.playNext}
        playPrev={this.props.playPrev} toggleLoop={this.props.toggleLoop}
        />
        <div className="controllers"> <VolumeControl /> </div>
      </>
    )
  }
}

export default MusicPlayerContainer;
