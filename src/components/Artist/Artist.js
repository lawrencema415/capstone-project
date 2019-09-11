import React,{Component} from 'react';

class Artist extends Component {
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
      <div className="artist-card" key={this.props.artist._id}>
        <div className="img-container" onMouseEnter={()=> this.setState({isHovered:true})} onMouseLeave={() => this.setState({isHovered:false})}>
        <img onClick={() => this.props.redirect(`/artist/${this.props.artist._id}`)} src={this.props.artist.picture} alt='playlist picture' />
          <button type="button">
            <i className="fa fa-play-circle-o" aria-hidden="true" style={this.selectStyle()}></i>
          </button>
          <div className="label">
          {this.props.artist.name}
          </div>
        </div>
      </div>
    )
  }
}


export default Artist;
