var React = require('react/addons');
var Router = require("react-router");
var routes = require('./client-routes');

module.exports = function(app) {

	app.use(function(req, res, next) {

		// We customize the onAbort method in order to handle redirects
		  var router = Router.create({
		    routes: routes,
		    location: req.path,
		    onAbort: function defaultAbortHandler(abortReason, location) {
		      if (abortReason && abortReason.to) {
		        res.redirect(301, abortReason.to);
		      } else {
		        res.redirect(404, "404");
		      }
		    }
		  });

		// React.renderToString takes your component
	    // and generates the markup

		//var reactHtml = React.renderToString(ReactApp({}));

        var reactHtml = "";
        router.run(function (Handler, state) {
            reactHtml = React.renderToString(React.createElement(Handler, {
                routerState: state,
                //deviceType: deviceType,
                environment: "server"
            }), null);
        });

	    // Output html rendered by react
		// console.log(myAppHtml);
	    res.render('index.ejs', {reactOutput: reactHtml});
	});

};