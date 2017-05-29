var redux = require('redux');
var {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

export var configure = (intialState = {}) => {
  var reducers = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  return redux.createStore(
    reducers, intialState, redux.compose(window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
}
