var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('reducers', () => {
  describe('searchText reducer', () => {
    it('should set searchText', () => {
        var action = {
          type: 'SET_SEARCH_TEXT',
          searchText: 'Dog'
        };

        var res = reducers.searchTextReducer(df('') , df(action));

        expect(res).toEqual(action.searchText);
    });
  });

 describe('showCompleted toggle reducer', () => {
   it('should toggle showCompleted on TOGGLE_SHOW_COMPLETED action', () => {
     var action = {
       type: 'TOGGLE_SHOW_COMPLETED'
     };

     var state = true;
     var res = reducers.showCompletedReducer(df(state), df(action));
     expect(res).toBe(false);
   });
 });


 describe('todos reducers', () => {
   it('should add new todo', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'Walk the Dog'
    }

    var res = reducers.todosReducer(df([]), df(action));
    expect(res.length).toBe(1);
    expect(res[0].text).toBe(action.text);
    });

    it('should toggle todo', () => {
     var action = {
       type: 'TOGGLE_TODO',
       id: 1
     }
    var state = [{
      id: 1,
      text: 'Something',
      completed: true,
      createdAt: 123,
      completedAt: 125
    }]
     var res = reducers.todosReducer(df(state), df(action));
     expect(res[0].completed).toBe(!state[0].completed);
     expect(res[0].completedAt).toNotExist();
     });


     it('should add existing todos', () => {
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

       var res = reducers.todosReducer(df([]), df(action));

       expect(res.length).toEqual(1);
       expect(res[0]).toEqual(todos[0]);
     });

 });

});
