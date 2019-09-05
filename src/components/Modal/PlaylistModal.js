import React, {Component} from 'react';

let modalStyles = {
  width: '500px',
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
  state = {
    isModalOpen: false
  }
  render() {
      let modal = (
        <div style={modalStyles}>
        Add new playlist
        <button onClick={() => this.setState({isModalOpen:false})} style={modalCloseButtonStyles}> x </button>
        </div>
      )

      if(! this.props.isModalOpen) {
        modal = null;
      }
    return (
      <div>
      <button onClick={()=> this.setState({isModalOpen:true})}>Add playlist</button>
        {modal}
      </div>
    )
  }
};

export default PlaylistModal;
