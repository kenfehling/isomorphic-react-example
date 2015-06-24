import React from "react";
import { Route, DefaultRoute, NotFoundRoute, Redirect } from "react-router";
import Application from "./containers/Application";
import About from "./containers/About";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";

export default (
    <Route name="app" handler={Application} path="/">
        <DefaultRoute name="home" handler={Home} />
        <Route name="about" handler={About} />
        <NotFoundRoute name="not-found" handler={NotFound} />
        <Redirect from="company" to="about" />
    </Route>
);
