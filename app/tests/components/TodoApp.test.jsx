var React = require('react');
var moment = require('moment');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on the handleAndTodo', () => {
    var todoText = 'test text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });

  it('should toggle completed value when handleToggle is called', () => {
      var todoData = {
        id: 11,
        text: 'Test features',
        completed: false,
        createdAt: undefined
      }
      var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
      todoApp.setState({todos: [todoData]});

      expect(todoApp.state.todos[0].completed).toBe(false);
      todoApp.handleToggle(todoData.id);
      expect(todoApp.state.todos[0].completed).toBe(true);

      expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  it('should remove createAt when toggle not completed', () => {
      var todoData = {
        id: 11,
        text: 'Test features',
        completed: true,
        createAt: moment().unix()
      }
      var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
      todoApp.setState({todos: [todoData]});

      expect(todoApp.state.todos[0].createAt).toBeA('number');
      todoApp.handleToggle(todoData.id);
      expect(todoApp.state.todos[0].completed).toBe(false);
      expect(todoApp.state.todos[0].completedAt).toNotExist();
  });
});
