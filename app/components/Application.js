import React from "react/addons";
import StyleSheet from'react-style';
import { RouteHandler } from 'react-router';
import Menu from "./Menu";
import { createRedux, bindActionCreators } from 'redux';
import { Provider, Connector } from 'redux/react';
import * as stores from '../stores';
import * as LocationActions from '../actions/LocationActions';

const redux = createRedux(stores);

const styles = StyleSheet.create({
    title: {
        textAlign: 'center'
    }
});

export default class Application {

    renderChild({ locations, dispatch }) {
        const actions = bindActionCreators(LocationActions, dispatch);
        return <div>
            <h1 styles={[styles.title]}>
                Isomorphic Server Side Rendering with React
            </h1>
            <Menu />
            {/* TODO: Do we have to pass locations to RouteHandler? */}
            <RouteHandler locations={locations} {...actions} />
        </div>;
    }

	render() {
		return <Provider redux={redux}>
            {() =>
                <Connector select={state => ({ locations: state.locations })}>
                    {this.renderChild}
                </Connector>
            }
        </Provider>;
	}
}