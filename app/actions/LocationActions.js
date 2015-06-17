import 'isomorphic-fetch';
import { FETCH_ALL_LOCATIONS, ADD_FAVORITE } from '../constants/ActionTypes';

export function fetchAllLocations() {
    return dispatch => {
        fetch('http://localhost:9000/locations')
            .then(res => res.json())
            .then(res => dispatch({
                type: FETCH_ALL_LOCATIONS,
                locations: res
            }));
    };
}

export function addFavorite(text) {
    return {
        type: ADD_FAVORITE,
        text
    };
}
