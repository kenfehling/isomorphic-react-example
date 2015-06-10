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

function get(url, success, error) {
    $.getJSON(toAbsolute(url), success).error((e) => error(e.responseJSON));
}

function post(url, data, success, error) {
    $.post(toAbsolute(url), data, success, 'json').error((e) => error(e.responseJSON));
}

export default {
    fetchLocations: () => {
        return {
            remote: () => new Promise((Y, N) => get('/locations', Y, N)),
            local: () => null,
            success: LocationActions.updateLocations,
            error: LocationActions.locationsFailed,
            loading: LocationActions.fetchLocations
        };
    }
};