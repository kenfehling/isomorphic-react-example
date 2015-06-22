import React from "react/addons";
import StyleSheet from'react-style';
import { RouteHandler } from 'react-router';
import Menu from "./Menu";

import { locations } from '../Singletons';
import Location from '../models/Location';

locations.add(new Location('0', 'Seoul'));

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
            {/* TODO: Do we have to pass locations to RouteHandler? */}
            <RouteHandler {...this.props} />
        </div>
	}
}