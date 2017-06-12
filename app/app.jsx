var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();
// var TodoAPI = require('TodoAPI');

import firebae from 'app/firebase';
import router from 'app/router';

firebase.auth().onAuthStateChanged((user) => {
  if(user){
    hashHistory.push('/todos');
    console.log(user);
    store.dispatch(actions.login(user.uid));
    store.dispatch(actions.startAddTodos());
  }else{
    hashHistory.push('/');
  }
});

// store.subscribe(() => {
//   console.log('New state', store.getState());
//   var newStore = store.getState();
//   TodoAPI.setTodos(newStore.todos);
// });

// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

// store.dispatch(actions.addTodo('Clean the yard'));
// store.dispatch(actions.setSearchText('yard'));
// store.dispatch(actions.toggleShowCompleted());



$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
