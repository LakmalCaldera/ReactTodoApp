var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <div>BoilerPlate v3 Project</div>,
  document.getElementById('app')
);
