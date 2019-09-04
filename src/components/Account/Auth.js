import React, {Component} from 'react';
import axios from 'axios';
import { API_URL } from '../../constant';
import Login from './Login';
import Signup from './Signup';

const Auth = props => {
  return (
    <>
      <Login currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} history={props.history}/>
      <Signup />
    </>
  )
}

export default Auth;
