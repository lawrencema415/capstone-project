import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Landing from '../components/Landing/Landing';
import Auth from '../components/Account/Auth';
import Home from '../components/Home/Home';

export default withRouter( ({setCurrentUser, currentUser, history} ) => {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest } render={(props) => ( currentUser ? <Component { ...props } /> : <Redirect to = '/' />
    )} />
  );

  // <Route path='/artist/:name' name={props.match.params.name} /> }/>
  return (
    <Switch>
      <Route exact path = '/' component = { Landing } />
      <Route path='/us' render={() => <Auth history={history} setCurrentUser={setCurrentUser} currentUser={currentUser}/>} />
      <Route path = '/browse' component = { Home }/>
    </Switch>
  )
})
