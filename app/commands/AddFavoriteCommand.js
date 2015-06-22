import AddFavoriteSignal from '../signals/AddFavoriteSignal';
import Locations from '../models/Locations';
import Location from '../models/Location';
import { addFavoriteSignal, locations } from '../Singletons';

addFavoriteSignal.add(function(id : String) {
    const location : Location = locations.getById(id);
    if (location) {
        if (!location.hasFavorite) {
            location.hasFavorite = true;
            locationUpdatedSignal.dispatch(location);
        }
    }
});