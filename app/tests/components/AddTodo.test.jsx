var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var {AddTodo} = require('AddTodo');
//import {AddTodo} from 'AddTodo';

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  describe('Ui', () => {
    it('should have a input field with a placeholder "What do you need to do?"', () => {
        var addTodo = TestUtils.renderIntoDocument(<AddTodo/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));
        var actualPlaceholder = $el.find('input').attr('placeholder');
        var expectedPlaceholder = "What do you need to do?";
        expect(actualPlaceholder).toBe(expectedPlaceholder);
    });

    it('should have a button with the text "Add Todo"', () => {
      var addTodo = TestUtils.renderIntoDocument(<AddTodo/>);
      var $el = $(ReactDOM.findDOMNode(addTodo));
      var actualBtnText = $el.find('button').text();
      var expectedBtnText = "Add Todo";
      expect(actualBtnText).toBe(expectedBtnText);
    });
  });

  describe('functionality', () => {
    it('should not dispatch ADD_TODO when input string is empty', () => {
      var spy = expect.createSpy();
      var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
      var $el = $(ReactDOM.findDOMNode(addTodo));
      addTodo.refs.task.value = '';
      var action = {
        type: 'ADD_TODO',
        text: addTodo.refs.task.value
      }

      TestUtils.Simulate.submit($el.find('form')[0]);
      expect(spy).toNotHaveBeenCalled();
    });

    it('should dispatch ADD_TODO when input string is not empty', () => {
      var spy = expect.createSpy();
      var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
      var $el = $(ReactDOM.findDOMNode(addTodo));
      addTodo.refs.task.value = 'abc';
      var action = {
        type: 'ADD_TODO',
        text: addTodo.refs.task.value
      }

      TestUtils.Simulate.submit($el.find('form')[0]);
      expect(spy).toHaveBeenCalledWith(action);
    });
  });
})
