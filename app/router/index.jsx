var React = require('react');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import TodoApp from 'TodoApp';
import LoginApp from 'LoginApp';
import firebae from 'app/firebase';

var requireLogin = (nextState, replace, next) => {
  if(!firebase.auth().currentUser){
    replace('/');
  }
  next();
};

var redirectIfLoggedIn = (nextState, replace, next) => {
  if(firebase.auth().currentUser){
    replace('/todos');
  }
  next();
};

export default (
  <Router history={hashHistory}>
  <Route path="/">
    <Route path="todos" component={TodoApp} onEnter={requireLogin}/>
    <IndexRoute component={LoginApp} onEnter={redirectIfLoggedIn}/>
  </Route>
</Router>
);
