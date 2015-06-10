import React from "react/addons";
import StyleSheet from'react-style';
import { RouteHandler } from 'react-router';
import Menu from "./Menu";

const styles = StyleSheet.create({
    title: {
        textAlign: 'center'
    }
});

export default class Application {
	render() {
		return <div>
            <h1 styles={[styles.title]}>
                Isomorphic Server Side Rendering with React
            </h1>
            <Menu />
            <RouteHandler />
        </div>;
	}
}