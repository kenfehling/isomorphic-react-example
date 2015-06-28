"use strict";

if (typeof process !== 'undefined') {
    require('isomorphic-fetch');
}

import { FETCH_ALL_FAVORITES, ADD_FAVORITE } from '../constants/ActionTypes';
import { API_HOST } from '../constants/Settings';

export function fetchAllFavorites() {
    return dispatch => {
        fetch(API_HOST + '/favorites')
        .then(res => res.json())
        .then(res => dispatch({
            type: FETCH_ALL_FAVORITES,
            favorites: res
        }));
    };
}

export function addFavorite(id) {
    return dispatch => {
        fetch(API_HOST + '/favorites', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        })
        .then(res => res.json())
        .then(res => dispatch({
            type: ADD_FAVORITE,
            favorites: res
        }));
    };
}