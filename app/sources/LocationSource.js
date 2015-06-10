import LocationActions from '../actions/LocationActions';
import $ from 'jquery';

function toAbsolute(url) {
    var host = window.location.hostname;
    if (host.indexOf('localhost') === 0 || host.indexOf('192.168') === 0) {
        return 'http://' + host + ":" + 9000 + url;
    }
    else {
        //return constants.REMOTE_API_HOST + url;
    }
}

function get(url, callback) {
    $.getJSON(toAbsolute(url), callback);
}

function post(url, data, callback) {
    $.post(toAbsolute(url), data, callback, 'json');
}

export default {
    fetchLocations: () => {
        return {
            remote() {
                return new Promise((resolve, reject) => {
                    get('/locations', (data) => {
                        // change this to `false` to see the error action being handled.
                        if (true) {
                            // resolve with some mock data
                            resolve(data);
                        } else {
                            reject('Things have broken');
                        }
                    });
                });
            },

            local() {
                // Never check locally, always fetch remotely.
                return null;
            },

            success: LocationActions.updateLocations,
            error: LocationActions.locationsFailed,
            loading: LocationActions.fetchLocations
        }
    }
};