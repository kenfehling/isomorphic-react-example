import React from "react/addons";
import Router from 'react-router';
import routes from "../src/routes";
import * as stores from '../src/stores';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';

export default function(app) {

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

        const redux = createRedux(stores);

        router.run(function (Handler, state) {
            // React.renderToString takes your component
            // and generates the markup
            var html = React.renderToString(
                React.createElement(Provider, { redux: redux },
                    () => React.createElement(Handler, {
                        routerState: state,
                        //deviceType: deviceType,
                        environment: "server"
                    })
                ),
            null);

            // Checks if route is NotFoundRoute
            if (state.routes[1].isNotFound) {
                res.status(404);
            }
            res.render('index.ejs', { reactOutput: html } );
        });
	});
};