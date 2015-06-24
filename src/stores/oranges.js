import { FETCH_ORANGES } from '../constants/ActionTypes';

const initialState = [];

export default function favorites(state=initialState, action={}) {
    switch (action.type) {
        case FETCH_ORANGES:
            return action.oranges;
    }
    return state;
}
