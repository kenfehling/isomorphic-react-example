/** @jsx React.DOM */

var React = require('react/addons');
var Router = require("react-router");
var RouteHandler = Router.RouteHandler;
var Menu = require("./Menu");

var Application = React.createClass({

	render: function () {
		return (
			<div>
				<Menu />
				<RouteHandler />
			</div>
		)
	}
});

module.exports = Application;