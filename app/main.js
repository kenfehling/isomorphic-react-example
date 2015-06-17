import React from "react/addons";
import Router from 'react-router';
import routes from "./routes/routes";
import { Provider } from 'redux/react';
import { createDispatcher, createRedux, composeStores } from 'redux';
import * as stores from './stores';
import { loggerMiddleware, thunkMiddleware } from './middleware';

const dispatcher = createDispatcher(
    composeStores(stores),
    getState => [thunkMiddleware(getState), loggerMiddleware]
);

const redux = createRedux(dispatcher);
var mountNode = document.getElementById("react-main-mount");

Router.run(routes, Router.HistoryLocation, function (Handler, state) {
    React.render(
        <Provider redux={redux}>
            { () => <Handler router={state} /> }
        </Provider>,
        mountNode
    );
});
