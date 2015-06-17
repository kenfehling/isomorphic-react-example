'use strict';

var express = require('express'),
    routes = require("../app/routes/routes"),
    Marty = require('marty'),
    path = require('path'),
    app = express(),
    port = 4444,
    bodyParser = require('body-parser');

// Make sure to include the JSX transpiler
require('node-jsx').install();

class IsomorphicApplication extends Marty.Application {
    constructor(options) {
        super(options);
        this.register('LocationsStore', require('../app/stores/LocationsStore'));
        this.register('FavoritesStore', require('../app/stores/FavoritesStore'));
    }
}

app.use(require('marty-express')({
    routes: routes,
    application: IsomorphicApplication,
    rendered: function (diagnostics) {
        console.log('Page rendered', diagnostics);
    }
}));

// Include static assets. Not advised for production
app.use(express['static'](path.join(__dirname, 'public')));
// Set view path
app.set('views', path.join(__dirname, 'views'));
// set up ejs for templating. You can use whatever
app.set('view engine', 'ejs');

// Set up Routes for the application
require('../app/routes/core-routes')(app);

//Route not found -- Set 404
app.get('*', function (req, res) {
    res.json({
        'route': 'Sorry this page does not exist!'
    });
});

app.listen(port);
console.log('Server is Up and Running at Port : ' + port);