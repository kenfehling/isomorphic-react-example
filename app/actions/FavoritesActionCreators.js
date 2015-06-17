import { ActionCreators } from 'marty';
import FavoritesConstants from '../constants/FavoritesConstants';

export default class FavoritesActionCreators extends ActionCreators {
    addFavorite(location) {
        this.dispatch(FavoriteConstants.ADD_FAVORITE, location)
    }
}