/** @jsx React.DOM */

var React = require('react/addons');
var Router = require("react-router");
var routes = require("./routes/routes");

var mountNode = document.getElementById("react-main-mount");

//React.render(new ReactApp({}), mountNode);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, mountNode);
});
