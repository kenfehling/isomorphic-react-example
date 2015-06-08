/** @jsx React.DOM */

var React = require("react/addons");
var StyleSheet = require('react-style');
var Link = require('react-router').Link;

var styles = StyleSheet.create({
    page: {
        margin: 'auto',
        fontSize: 14,
        width: 400
    },
    label: {
        float: "left",
        textAlign: "right",
        marginRight: 8,
        width: 100
    }
});

var About = React.createClass({
    render: function () {
        return (
            <div styles={[styles.page]}>
                <p>
                    <div styles={[styles.label]}>Github:</div>
                    <a href="https://github.com/kenfehling/isomorphic-react-example">
                        kenfehling/isomorphic-react-example
                    </a>
                </p>
                <p>
                    <div styles={[styles.label]}>forked from:</div>
                    <a href="https://github.com/DavidWells/isomorphic-react-example">
                        DavidWells/isomorphic-react-example
                    </a>
                </p>
            </div>
        )
    }
});

module.exports = About;