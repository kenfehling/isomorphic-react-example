import React, { PropTypes } from 'react/addons';
import StyleSheet from 'react-style';
import { fetch } from './decorators';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import * as LocationActions from '../actions/LocationActions';
import LocationList from './LocationList';

const styles = StyleSheet.create({
    page: {
        margin: 'auto',
        textAlign: 'center',
        fontSize: 14
    },
    section: {
        marginBottom: 20
    },
    error: {
        color: "#F00"
    }
});

@connect(state => ({
    locations: state.locations
}))
export default class Home {
    render() {
        const { dispatch } = this.props;
        const actions = bindActionCreators(LocationActions, dispatch);
        return <div styles={[styles.page]}>
            <LocationList actions={actions} {...this.props} />
            <h1>Favorites</h1>
            <p>Not implemented</p>
        </div>;
    }
}