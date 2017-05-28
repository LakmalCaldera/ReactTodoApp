var redux = require('redux');
var {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

export var configure = () => {
  var reducers = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  return redux.createStore(
    reducers, redux.compose(window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
}
