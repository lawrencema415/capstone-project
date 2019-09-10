import React,{Component} from 'react';

class Playlist extends Component {
  state = {
    isHovered:false
  }

  selectStyle = () => {
    if(this.state.isHovered) {
      return (
        {opacity:1}
      )
    } else {
      return {opacity:0}
    }
  }

  render() {
    return (
      <div className="playlist-card" key={this.props.playlist._id}>
        <div className="img-container" onMouseEnter={()=> this.setState({isHovered:true})} onMouseLeave={() => this.setState({isHovered:false})}>
          <img src={this.props.playlist.Songs.length >= 1 ? this.props.playlist.Songs[0].picture : 'https://spotify-clone.s3-us-west-1.amazonaws.com/empty_playlist.jpg'} alt='playlist picture' />
            <button type="button" onClick={()=>this.props.playPlaylist(this.props.playlist)}>
              <i className="fa fa-play-circle-o" aria-hidden="true" style={this.selectStyle()}></i>
            </button>
        </div>
        {this.props.playlist.name} <button type="button" onClick={()=>this.props.removePlaylist(this.props.playlist._id)}>Delete</button>

      </div>
    )
  }
}


export default Playlist;
