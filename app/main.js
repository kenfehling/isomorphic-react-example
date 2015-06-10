import React from "react/addons";
import Router from 'react-router';
import routes from "./routes/routes";

var mountNode = document.getElementById("react-main-mount");

//React.render(new ReactApp({}), mountNode);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, mountNode);
});
