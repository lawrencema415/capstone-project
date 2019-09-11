import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Landing from '../components/Landing/Landing';
import Auth from '../components/Account/Auth';
import Home from '../components/Home/Home';

export default withRouter( ({setCurrentUser, currentUser, history} ) => {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest } render={(props) => ( currentUser ? <Component { ...props } /> : <Redirect to = '/us' />
    )} />
  );

  return (
    <Switch>
      <Route exact path = '/us' component = { Landing } />
      <Route path='/auth' render={() => <Auth history={history} setCurrentUser={setCurrentUser} currentUser={currentUser}/>} />
    {currentUser ?  <Route path = '/' render={() => <Home history={history} />} /> : <Redirect to='/us'/>}
    </Switch>
  )
})
