import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

var expect = require('expect');
import firebase, {firebaseRef} from './../../firebase';
var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

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
        todo: {
          id: '123abc',
          text: 'Anything here',
          completed: false
        }
      }
      var res = actions.addTodo(action.todo);
      expect(res).toEqual(action);
  });

  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = 'My todo item';

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({
          type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text: todoText
      });
      done();
    }).catch(done);

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
        type: 'UPDATE_TODO',
        id: 1,
        updates: {
          completed: false
        }
      }
      var res = actions.updateTodo(action.id, action.updates);
      expect(res).toEqual(action);
  });

  describe('Tests with firebase todos', () => {
      var testTodoRef;
      beforeEach((done) => {
        testTodoRef = firebaseRef.child('todos').push();

        testTodoRef.set({
          text: 'Something to do',
          completed: false,
          createdAt: 12312313
        }).then(done);
      });

      afterEach((done) => {
        testTodoRef.remove().then(done);
      });

      it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
        const store = createMockStore({});
        const action = actions.startToggleTodo(testTodoRef.key, true);

        store.dispatch(action).then(() => {
          const mockActions = store.getActions();
          expect(mockActions[0]).toInclude({
            type: 'UPDATE_TODO',
            id: testTodoRef.key
          });

          expect(mockActions[0].updates).toInclude({
              completed: true
          });

          expect(mockActions[0].updates.completedAt).toExist();
          done();
        }).catch(done);
      });
  });
});
