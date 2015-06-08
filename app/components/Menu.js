/** @jsx React.DOM */

var React = require('react/addons');
var StyleSheet = require('react-style');
var Link = require('react-router').Link;

var styles = StyleSheet.create({
    menu: {
        textAlign: "center",
        marginTop: 4,
        marginBottom: 16
    },
    item: {
        color: "#36F",
        fontSize: 14,
        fontWeight: 'bold',
        margin: 16
    }
});

var Menu = React.createClass({

    render: function () {
        return (
            <div styles={[styles.menu]}>
                <Link to="/" styles={[styles.item]}>Home</Link>
                <Link to="about" styles={[styles.item]}>About</Link>
            </div>
        )
    }
});

module.exports = Menu;