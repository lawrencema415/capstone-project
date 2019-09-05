import React, {Component} from 'react';
import './PlaylistModal.css';
let modalStyles = {
  width: '100vw',
  maxWidth:'100%',
  margin:'0 auto',
  position:'fixed',
  left:'50%',
  top:'50%',
  transform: 'translate(-50%,-50%)',
  zIndex:'999',
  backgroundColor:'#eee',
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
  alignSelf: 'flex-end'
}

class PlaylistModal extends Component {

  render() {
      let modal = (
        <div className="modalStyles">
        <span>&#10005;</span>
        Create a new playlist
        <label>Playlist Name</label>
        <input placeholder="New playlist"/>
        <button type="button" onClick={() => this.props.closeModal()} style={modalCloseButtonStyles}> Cancel </button>
        <button type="button" onClick={() => this.props.closeModal()} style={modalCloseButtonStyles}> Create </button>
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

export default PlaylistModal;
