var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should call onToggle prop with id on click', () => {
    var toggleData = {
      id: 199,
      text: 'Write todo.test.jsx test',
      completed: true
    }

    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...toggleData} onToggle={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todo))[0];

    TestUtils.Simulate.click($el);
    expect(spy).toHaveBeenCalledWith(toggleData.id);
  });
});
