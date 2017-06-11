var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  onSubmitForm: function(e){
    e.preventDefault();
    var taskRef = this.refs.task
    var {dispatch} = this.props;
    if(taskRef.value.length > 0){
      //this.props.onHandleNewItem(taskRef.value);
      dispatch(actions.startAddTodo(taskRef.value));
      taskRef.value = '';
    }
  },
  render: function(){
    return (
      <div className="container__footer">
        <form onSubmit={this.onSubmitForm}>
            <input type="text" placeholder="What do you need to do?" ref="task"/>
            <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

//module.exports = AddTodo;
export default connect()(AddTodo);
