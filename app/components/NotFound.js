/** @jsx React.DOM */

var React = require('react/addons');
var StyleSheet = require('react-style');

var styles = StyleSheet.create({
    page: {
        textAlign: "center",
        color: "#F00",
        fontSize: 14,
        fontWeight: "bold"
    }
});

var NotFound = React.createClass({
    render: function () {
        return (
            <div styles={[styles.page]}>
                404: Page not found
            </div>
        )
    }
});

module.exports = NotFound;