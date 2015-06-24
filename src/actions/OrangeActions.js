import 'isomorphic-fetch';
import { FETCH_ORANGES, DROP_IN_BASKET, DROP_IN_DISH } from '../constants/ActionTypes';
import { API_HOST } from '../constants/Settings';

// Right now it just fakes everything and doesn't use the API server

export function fetchOranges() {
  console.log("Fetching oranges");
    return dispatch => {
        dispatch({
            type: FETCH_ORANGES,
            oranges: 6
        });
    };
}

export function dropInBasket() {
  return dispatch => {
    dispatch({
      type: DROP_IN_BASKET,
    });
  };
}

export function dropInDish() {
  return dispatch => {
    dispatch({
      type: DROP_IN_DISH,
    });
  };
}
