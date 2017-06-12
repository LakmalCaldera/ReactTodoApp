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
      todo: {
        id: 'abc123',
        text: 'Something to do',
        completed: false,
        completedAt: 12232132
      }
    }

    var res = reducers.todosReducer(df([]), df(action));
    expect(res.length).toBe(1);
    expect(res[0]).toBe(action.todo);
    });

    it('should toggle todo', () => {
     var updates = {
       completed: false,
       completedAt: null
     };
     var action = {
       type: 'UPDATE_TODO',
       id: 1,
       updates
     }
    var state = [{
      id: 1,
      text: 'Something',
      completed: true,
      createdAt: 123,
      completedAt: 125
    }]
     var res = reducers.todosReducer(df(state), df(action));
     expect(res[0].completed).toBe(action.updates.completed);
     expect(res[0].completedAt).toNotExist();
     expect(res[0].text).toEqual(state[0].text);
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

     it('should clear existing todos on LOGOUT', () => {
       var todos = [{
         id: 111,
         text: 'anything',
         completed: false,
         completedAt: undefined,
         createdAt: 123231
       }];

       var action = {
         type: 'LOGOUT'
       }

       var res = reducers.todosReducer(df(todos), df(action));

       expect(res.length).toEqual(0);
     });

 });


 describe('Auth Reducers', () => {
   it('should record user uid into redux store on login action', () => {
     var user = {
       uid: "1234"
     }

     var action = {
       type: 'LOGIN',
       uid: user.uid
     }

     var res = reducers.authReducer(df({}), df(action));

     expect(res.uid).toExist();
     expect(res.uid).toBe(user.uid);
   });

   it('should clear user uid in redux store on logout action', () => {
     var user = {
       uid: "1234"
     }

     var action = {
       type: 'LOGOUT'
     }

     var res = reducers.authReducer(df(user), df(action));

     expect(res.uid).toNotExist();
   });


 });

});
