import { Store } from 'marty';
import FavoritesQuery from '../queries/FavoritesQuery';
import FavoritesConstants from '../constants/FavoritesConstants';

export default class FavoritesStore extends Store {
    constructor(options) {
        super(options);
        this.state = {};
        this.handlers = {
            addFavorites: FavoritesConstants.RECEIVE_FAVORITES
        };
    }
    getAll() {
        return _.values(this.state);
    }
    addFavorites(favorites) {
        this.state[favorites.id] = favorites;
        this.hasChanged();
    }
    getById(id) {
        return this.fetch({
            id: id,
            locally() {
                return this.state[id];
            },
            remotely() {
                return FavoritesQuery.for(this).getById(id);
            }
        });
    }
}