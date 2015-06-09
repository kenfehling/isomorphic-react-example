var alt = require('../alt');
var ServerActionCreators = require('../actions/ServerActionCreators');

var FakeDataStore = alt.createStore({
    displayName: 'FakeDataStore',

    state: {
        data: {}
    },

    bindActions: [
        ServerActionCreators
    ],

    pubilcMethods: {
        onReceiveAll: function (data) {
            this.setState({
                data: data
            });
        }
    },

    getAll: function () {
        return this.state.data;
    }

});

module.exports = FakeDataStore;