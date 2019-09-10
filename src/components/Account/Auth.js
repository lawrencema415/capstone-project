import React, {Component} from 'react';
import Login from './Login';
import Signup from './Signup';

const Auth = props => {
  return (
    <>
      <Login currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} history={props.history}/>
      <Signup currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} history={props.history}/>
    </>
  )
}

export default Auth;
