import { ADD_FAVORITE } from '../constants/ActionTypes';

const initialState = [
    { id:0, name: 'Seoul' }
];

export default function locations(state=initialState, action) {
    switch (action.type) {
        case ADD_FAVORITE:
            return [{
                id: state[0].id + 1,
                text: action.text
            }, ...state];
    }
    return state;
}