import { FETCH_ALL_LOCATIONS, ADD_FAVORITE } from '../constants/ActionTypes';

const initialState = [];

export default function favorites(state=initialState, action) {
    switch (action.type) {
        case FETCH_ALL_LOCATIONS:
            return action.favorites;
    }
    return state;
}