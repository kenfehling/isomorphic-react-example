import 'isomorphic-fetch';
import { FETCH_ALL_LOCATIONS } from '../constants/ActionTypes';
import { API_HOST } from '../constants/Settings';

export function fetchAllLocations() {
    return dispatch => {
        fetch(API_HOST + '/locations')
        .then(res => res.json())
        .then(res => dispatch({
            type: FETCH_ALL_LOCATIONS,
            locations: res
        }));
    };
}