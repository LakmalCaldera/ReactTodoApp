var React = require('react');
import * as Redux from 'react-redux';

import * as actions from 'actions';

//var TodoList = require('TodoList');
import TodoList from 'TodoList'
//var AddTodo = require('AddTodo');
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
//var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

export var TodoApp = React.createClass({
  /*getInitialState: function(){
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    }
  },
  componentDidUpdate: function(){
    TodoAPI.setTodos(this.state.todos);
  },*/
  /*handleSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  handleAddTodo: function(taskText){
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: taskText,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },*/
  onLogout(e){
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());

  },
  render(){
    //var {todos, showCompleted, searchText} = this.state;
    //var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return(
      <div>

        <div className="page-actions">
          <a href="#" onClick={this.onLogout}>Logout</a>
        </div>


        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="columns small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

// module.exports = TodoApp;
export default Redux.connect()(TodoApp);
