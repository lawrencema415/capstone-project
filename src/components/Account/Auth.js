import React, {Component} from 'react';
import axios from 'axios';
import { API_URL } from '../../constant';
import Login from './Login';
import Signup from './Signup';

const Auth = () => {
  return (
    <>
      <Login />
      <Signup />
    </>
  )
}

export default Auth;
