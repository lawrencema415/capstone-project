import React, {Component} from 'react';
let modalStyles = {
  width: '100vw',
  maxWidth:'100%',
  margin:'0 auto',
  position:'fixed',
  left:'50%',
  top:'50%',
  transform: 'translate(-50%,-50%)',
  zIndex:'999',
  backgroundColor:'#282828',
  padding: '10px 20px 40px',
  display:'flex',
  flexDirection:'column'
}

let modalCloseButtonStyles = {
  marginBottom: '15px',
  padding:'3px 8px',
  borderRadius: '50%',
  border: 'none',
  width: '30px',
  fontWeight: 'bold',
  alignSelf: 'flex-end',
  display:'inline-block',
  fontSize:'11px',
  lineHeight:'18px',
  color:'white',
  fontWeight:'400px',
  borderRadius:'0.3em'
}

let label1Styles = {
  fontSize:'48px',
  lineHeight:'56px',
  fontWeight:'900px',
  color:'white'
}

let placeholderStyles = {
  color:'#535353',
  fontSize:'48px',
  lineHeight:'56px',
  fontWeight:'900px',
  backgroundColor:'#282828',
  border: '0',
  caretColor:'green'
}

class AddSongModal extends Component {

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
    this.setState({user:localStorage.getItem('uid')});
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e) => {
    if(this.node && this.node.contains(e.target)) {
      return ;
    }
    this.props.closeModal();
  }

  handleChange = (event) => {
    this.setState({name:event.target.value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let name = this.state;
    this.props.createPlaylist(name);
    this.props.closeModal();
  }

  renderPlaylists = playlists => {
    let options = playlists.map( playlist => {
      return (
        <button type="button" onClick={() => {
            this.props.addSong(playlist._id,this.props.selectedSong);
            this.props.closeModal();
          }
        }>
           {playlist.name}
        </button>
      )
    })
    return options;
  }

  render() {
      let modal = (
        <div style={modalStyles} ref={node => this.node = node}>
          <span onClick={() => this.props.closeModal()}>&#10005;</span>
          <label style={label1Styles}>Add to playlist</label>
          {this.renderPlaylists(this.props.playlists)}
          <button type="button" onClick={() => this.props.closeModal()} style={modalCloseButtonStyles}> Cancel </button>
        </div>
      )

      if(! this.props.isModalOpen) {
        modal = null;
      }
      return (
        <div>
          {modal}
        </div>
      )
  }
};

export default AddSongModal;
