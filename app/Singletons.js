import Locations from './models/Locations';
import LocationUpdatedSignal from './signals/LocationUpdatedSignal';
import AddFavoriteSignal from './signals/AddFavoriteSignal';

export const locations = new Locations();
export const locationUpdatedSignal = new LocationUpdatedSignal();
export const addFavoriteSignal = new AddFavoriteSignal();