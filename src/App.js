import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { API_URL } from './constant';
import Routes from './config/routes';

class App extends Component {
  state = {
    currentUser: localStorage.getItem('uid'),
  };

  setCurrentUser = (userId) => {
    this.setState({ currentUser: userId});
    localStorage.setItem('uid', userId);
  }

  logout = () => {
    localStorage.removeItem('uid');
    axios.post(`${API_URL}/auth/logout`, {withCredentials: true})
    .then(res => {
      this.setState({ currentUser: null});
      this.props.history.push('/');
    })
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Routes currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} />
      </div>
    );
  }

}

export default withRouter(App);
