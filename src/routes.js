import React from "react";
import { Route, DefaultRoute, NotFoundRoute, Redirect } from "react-router";
import Application from "./components/Application";
import About from "./components/About";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

export default (
    <Route name="app" handler={Application} path="/">
        <DefaultRoute name="home" handler={Home} />
        <Route name="about" handler={About} />
        <NotFoundRoute name="not-found" handler={NotFound} />
        <Redirect from="company" to="about" />
    </Route>
);