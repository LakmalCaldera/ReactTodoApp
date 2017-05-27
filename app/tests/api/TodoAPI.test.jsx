var expect = require('expect');
var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(()=> {
    localStorage.removeItem('todos');
  });


  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', ()=>{
    it('should set valid todos array', () => {
        var todos = [
          {
            id: 23,
            test: 'test all files'
          }
        ];
        TodoAPI.setTodos(todos);
        var actualTodos = JSON.parse(localStorage.getItem('todos'));
        expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () =>{
      var badTodos = {a: 'b'};

      TodoAPI.setTodos(badTodos);
      expect(localStorage.getItem('todos')).toBe(null);
    });

  });

  describe('getTodos', () => {
      it('should return empty array for bad localStorage data', () => {
        var actualTodos = TodoAPI.getTodos();
        expect(actualTodos).toEqual([]);
      });

      it('should return  array for valid localStorage data', () => {
        var todos = [
          {
            id: 23,
            test: 'test all files'
          }
        ];
        TodoAPI.setTodos(todos);
        var actualTodos = TodoAPI.getTodos();
        expect(actualTodos).toEqual(todos);
      });
  });
});
