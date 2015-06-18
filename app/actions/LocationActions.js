import 'isomorphic-fetch';
import { FETCH_ALL_LOCATIONS } from '../constants/ActionTypes';

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