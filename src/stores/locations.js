import { FETCH_ALL_LOCATIONS, ADD_FAVORITE } from '../constants/ActionTypes';
import _ from 'lodash';

const initialState = [];

export default function locations(state=initialState, action={}) {
    switch (action.type) {
        case ADD_FAVORITE:
            const newLoc = action.favorites;
            const origLoc = _.find(state, (loc) => loc._id === newLoc._id);
            return replaceInArray(state, origLoc, newLoc);
        case FETCH_ALL_LOCATIONS:
            return action.locations;
    }
    return state;
}

function replaceInArray(array:Array, item1, item2) {
    const i = _.indexOf(array, item1);
    return [..._.take(array, i), item2, ..._.drop(array, i + 1)];
}