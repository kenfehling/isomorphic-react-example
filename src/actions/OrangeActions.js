import 'isomorphic-fetch';
import { FETCH_ORANGES } from '../constants/ActionTypes';
import { API_HOST } from '../constants/Settings';

export function fetchOranges() {
  console.log("Fetching oranges");
    return dispatch => {
        dispatch({
            type: FETCH_ORANGES,
            oranges: 6
        });
    };
}
