var fakeData = require('../data/fakeData.js');
var ServerActionCreators = require('../actions/ServerActionCreators');

module.exports = {

    getAllData: function () {
        // simulate retrieving data from a database
        //var rawMessages = JSON.parse(localStorage.getItem('messages'));

        // simulate success callback
        ServerActionCreators.receiveAll(fakeData);
    }
};