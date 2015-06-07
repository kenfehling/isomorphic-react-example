/** @jsx React.DOM */

var React = require('react/addons');
var Router = require("react-router");
var RouteHandler = Router.RouteHandler;

var Application = React.createClass({

	render: function () {
		return (
			<div>
				<div>Menu</div>
				<RouteHandler />
			</div>
		)
	}
});

module.exports = Application;