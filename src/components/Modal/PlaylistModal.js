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

class PlaylistModal extends Component {
  state = {
    name:'',
    user: ''
  }

  componentDidMount() {
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
    this.props.closeModal()
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

  render() {
      let modal = (
        <div style={modalStyles} ref={node => this.node = node}>
        <span>&#10005;</span>
        <label style={label1Styles}>Create a new playlist</label>
        <form>
        <input type="text" name="name" onChange={this.handleChange} style={placeholderStyles} placeholder="New playlist"/>
        <button type="submit" onClick={this.handleSubmit} style={modalCloseButtonStyles}> Create </button>
        </form>
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

export default PlaylistModal;
