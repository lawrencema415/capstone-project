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

  // <Route path='/artist/:name' name={props.match.params.name} /> }/>
  return (
    <Switch>
      <Route exact path = '/us' component = { Landing } />
      <Route path='/auth' render={() => <Auth history={history} setCurrentUser={setCurrentUser} currentUser={currentUser}/>} />
    {currentUser ?  <Route path = '/' component = { Home }/> : <Redirect to='/us'/>}
    </Switch>
  )
})
