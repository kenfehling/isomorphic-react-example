import { Store } from 'marty';
import LocationsQuery from '../queries/LocationsQuery';
import LocationsConstants from '../constants/LocationsConstants';

export default class LocationsStore extends Store {
    constructor(options) {
        super(options);
        this.state = {};
        this.handlers = {
            addLocations: LocationsConstants.RECEIVE_LOCATIONS
        };
    }
    getAll() {
        return _.values(this.state);
    }
    addLocations(locations) {
        this.state[locations.id] = locations;
        this.hasChanged();
    }
    getById(id) {
        return this.fetch({
            id: id,
            locally() {
                return this.state[id];
            },
            remotely() {
                return LocationsQuery.for(this).getById(id);
            }
        });
    }
}