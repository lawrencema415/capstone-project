import React, {Component} from 'react'
import MusicDetail from './MusicDetail';
import MusicControl from './MusicControl';
import VolumeControl from './VolumeControl';
class MusicPlayerContainer extends Component {

  render() {

    return(
      <>
        <>
          <div className="pic"> <MusicDetail currentSongImg={this.props.currentSongImg} currentSongName={this.props.currentSongName}/> </div>
          <MusicControl currentSong={this.props.currentSong} />
          <div className="audio"> <VolumeControl /> </div>
        </>
      </>
    )
  }
}

export default MusicPlayerContainer;
