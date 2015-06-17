import { createActionCreators } from 'marty';
import LocationsConstants from '../constants/LocationsConstants';
import LocationsAPI from '../sources/LocationsAPI';

export default createActionCreators({
    id: 'LocationsQuery',
    getById(id) {
        return LocationsAPI.for(this).getById(id)
            .then((res) => this.dispatch(LocationsConstants.RECEIVE_LOCATIONS, res.body, id))
            .catch((err) => this.dispatch(LocationsConstants.RECEIVE_LOCATIONS_FAILED, err, id));
    }
});