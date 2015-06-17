import { FETCH_ALL_LOCATIONS, ADD_FAVORITE } from '../constants/ActionTypes';

const initialState = {
    locations: []
};

export default function locations(state=initialState, action) {
    switch (action.type) {
        case ADD_FAVORITE:
            return [{
                id: state[0].id + 1,
                text: action.text
            }, ...state];
        case FETCH_ALL_LOCATIONS:
            var s = Object.assign({}, state, { locations: action.locations });
            return s.locations;
    }
    return state;
}