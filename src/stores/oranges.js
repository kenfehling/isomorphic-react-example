import { FETCH_ORANGES, DROP_IN_DISH, DROP_IN_BASKET, NEW_DAY } from '../constants/ActionTypes';

const initialState = {
  oranges: 7,
  basketOranges: 0,
  dishOranges: 0
};

export default function oranges(state=initialState, action) {
    switch (action.type) {
        case FETCH_ORANGES:
            console.log(action);
            return action.oranges;
        case DROP_IN_DISH:
            return {
                oranges: state.oranges - 1,
                dishOranges: state.dishOranges + 1,
                basketOranges: state.basketOranges
            }
        case DROP_IN_BASKET:
          return {
              oranges: state.oranges - 1,
              dishOranges: state.dishOranges,
              basketOranges: state.basketOranges + 1
          }
        case NEW_DAY:
        default:
            return state;
    }
    return state;
}
