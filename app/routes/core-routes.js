var React = require('react/addons');
var Router = require("react-router");
var routes = require('./routes');

module.exports = function(app) {

	app.use(function(req, res, next) {

		// We customize the onAbort method in order to handle redirects
        var router = Router.create({
            routes: routes,
            location: req.path,
            onAbort: function defaultAbortHandler(abortReason, location) {
                if (abortReason && abortReason.to) {
                    res.redirect(301, abortReason.to);
                } else {  // TODO: Is this needed?
                    res.redirect(404, "404");
                }
            }
        });

        router.run(function (Handler, state) {
            var html = React.renderToString(React.createElement(Handler, {
                routerState: state,
                //deviceType: deviceType,
                environment: "server"
            }), null);
            if (state.routes[1].isNotFound) {
                res.status(400);
            }
            res.render('index.ejs', { reactOutput: html} );
        });
	});
};