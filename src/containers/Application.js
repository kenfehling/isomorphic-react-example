import React from "react/addons";
import StyleSheet from'react-style';
import { RouteHandler } from 'react-router';
import Menu from "../components/Menu";

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#ffad00'
    }
});

export default class Application {

	render() {
        return <div style={styles.page}>
            <Menu />
            {/* TODO: Do we have to pass locations to RouteHandler? */}
            <RouteHandler {...this.props} />
        </div>
	}
}
