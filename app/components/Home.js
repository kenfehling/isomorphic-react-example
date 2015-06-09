/** @jsx React.DOM */

var React = require('react/addons');
var WebAPIUtils = require('../utils/WebAPIUtils');
var FakeDataStore = require('../stores/FakeDataStore');

/* create factory with griddle component */
var Griddle = React.createFactory(require('griddle-react'));

var columnMeta = require('../data/columnMeta.js').columnMeta;
var resultsPerPage = 200;

function getStateFromStores() {
    return {
        data: FakeDataStore.StoreModel.getAll()
    };
}

var Home = React.createClass({
    getInitialState: function() {
        return getStateFromStores();
    },
    componentDidMount: function () {
      WebAPIUtils.getAllData();
    },
    render: function () {
        return (
            <div id="table-area">
                <Griddle results={this.state.data}
                      columnMetadata={columnMeta}
                      resultsPerPage={resultsPerPage}
                      tableClassName="table"/>
          </div>
        )
    }
});

/* Module.exports instead of normal dom mounting */
module.exports = Home;