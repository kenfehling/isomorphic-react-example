import { FETCH_ALL_FAVORITES, ADD_FAVORITE } from '../constants/ActionTypes';

const initialState = [];

export default function favorites(state=initialState, action) {
    switch (action.type) {
        case ADD_FAVORITE:
            return [{
                id: state[0].id + 1,
                text: action.text
            }, ...state];
        case FETCH_ALL_FAVORITES:
            return action.favorites;
    }
    return state;
}