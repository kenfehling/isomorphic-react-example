import React from "react/addons";
import StyleSheet from'react-style';
import { RouteHandler } from 'react-router';
import Menu from "./Menu";

export default class Application {

	render() {
		return <div>
            <Menu />
            <RouteHandler />
        </div>;
	}
}