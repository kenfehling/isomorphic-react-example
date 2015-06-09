var alt = require('../alt');

// ES6
//this.generateActions('receiveAll');

// ES5
var actions = alt.createActions(function () {
    this.receiveAll = function (all) {
        this.dispatch(all);
    };
});

module.exports = alt.createActions(actions);