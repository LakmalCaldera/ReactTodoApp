var React = require('react');

var AddTodo = React.createClass({
  onSubmitForm: function(e){
    e.preventDefault();
    var taskRef = this.refs.task;
    if(taskRef.value.length > 0){
      this.props.onHandleNewItem(taskRef.value);
      taskRef.value = '';
    }
  },
  render: function(){
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
            <input type="text" placeholder="What do you need to do?" ref="task"/>
            <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
