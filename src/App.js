import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { API_URL } from './constant';

class App extends Component {
  state = {
    currentUser: localStorage.getItem('uid'),
  };

  setCurrentUser = (userId) => {
    this.setState({ currentUser: userId});
    localStorage.setItem('uid', userId);
  }



  render() {
    return (
      <div>
      Musiq
      </div>
    );
  }

}

export default withRouter(App);
