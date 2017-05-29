var expect = require('expect');
var actions = require('actions');

describe('actions', () => {
  it('should generate search text action', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Some search text'
      }
      var res = actions.setSearchText(action.searchText);
      expect(res).toEqual(action);
  });

  it('should generate add to do action', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Some text'
      }
      var res = actions.addTodo(action.text);
      expect(res).toEqual(action);
  });


  it('should generate toggle to show complete todos action', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      }
      var res = actions.toggleShowCompleted();
      expect(res).toEqual(action);
  });

  it('should generate addTodos actions object', ()=>{
    var todos = [{
      id: 111,
      text: 'anything',
      completed: false,
      completedAt: undefined,
      createdAt: 123231
    }];

    var action = {
      type: 'ADD_TODOS',
      todos
    }

    var res = actions.addTodos(todos);
    expect(res).toEqual(action);
  });


  it('should generate toggle to complete todos action', () => {
      var action = {
        type: 'TOGGLE_TODO',
        id: 1
      }
      var res = actions.toggleTodo(action.id);
      expect(res).toEqual(action);
  });
});
