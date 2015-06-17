import { createActionCreators } from 'marty';
import FavoritesConstants from '../constants/FavoritesConstants';
import FavoritesAPI from '../sources/FavoritesAPI';

export default createActionCreators({
    id: 'FavoritesQuery',
    getById(id) {
        return FavoritesAPI.for(this).getById(id)
            .then((res) => this.dispatch(FavoritesConstants.RECEIVE_FAVORITES, res.body, id))
            .catch((err) => this.dispatch(FavoritesConstants.RECEIVE_FAVORITES_FAILED, err, id));
    }
});