import 'isomorphic-fetch';
import { FETCH_ORANGES, DROP_IN_BASKET, DROP_IN_DISH, NEW_DAY } from '../constants/ActionTypes';
import { API_HOST } from '../constants/Settings';

// Right now it just fakes everything and doesn't use the API server

export function fetchOranges() {
  return dispatch => {
      dispatch({
          type: FETCH_ORANGES,
          oranges: 7,
          basketOranges: 0,
          dishOranges: 0
      });
    };
}

export function dropInBasket() {
  return {
      type: DROP_IN_BASKET
  };
}

export function dropInDish() {
  return {
      type: DROP_IN_DISH
  };
}

export function newDay() {
  return {
      type: NEW_DAY
  };
}
