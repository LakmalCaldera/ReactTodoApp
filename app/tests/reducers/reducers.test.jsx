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
});
