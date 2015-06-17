import React, { PropTypes } from 'react/addons';
import StyleSheet from 'react-style';
import { fetch } from './decorators';

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

@fetch(actions => actions.fetchAllFavorites())
export default class FavoriteList {
    static propTypes = {
        favorites: PropTypes.array.isRequired
    };

    render() {
        const { favorites } = this.props;
        return <div>
            <h1>Favorites</h1>
            { favorites ? favorites.map((favorite, i) => {
                return <p>{favorite.location.name}</p>;
            }) : <div styles={[styles.error]}>No favorites</div>}
        </div>;
    }
}