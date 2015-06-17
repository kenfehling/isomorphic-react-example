import 'isomorphic-fetch';
import { FETCH_ALL_FAVORITES } from '../constants/ActionTypes';

export function fetchAllFavorites() {
    return dispatch => {
        fetch('http://localhost:9000/favorites')
            .then(res => res.json())
            .then(res => dispatch({
                type: FETCH_ALL_FAVORITES,
                favorites: res
            }));
    };
}