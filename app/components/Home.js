import React, { PropTypes } from 'react/addons';
import StyleSheet from 'react-style';
import { fetch } from './decorators';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import * as LocationActions from '../actions/LocationActions';
import * as FavoriteActions from '../actions/FavoriteActions';
import LocationList from './LocationList';
import FavoriteList from './FavoriteList';

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
    locations: state.locations,
    favorites: state.favorites
}))
export default class Home {
    static propTypes = {
        locations: PropTypes.array.isRequired
    };

    render() {
        const { dispatch } = this.props;
        const locationActions = bindActionCreators(LocationActions, dispatch);
        const favoriteActions = bindActionCreators(FavoriteActions, dispatch);
        return <div styles={[styles.page]}>

            {/* TODO: Can the properties be written in a cleaner way? */}
            <LocationList {...this.props}
                {...locationActions} actions={locationActions} />
            <FavoriteList {...this.props}
                {...favoriteActions} actions={favoriteActions} />
        </div>;
    }
}