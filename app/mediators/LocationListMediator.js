import { bindActionCreators } from 'redux';
//import * as LocationActions from '../../actions/LocationActions';
//import * as FavoriteActions from '../../actions/FavoriteActions';

import { locations, addFavoriteSignal, locationUpdatedSignal }
    from '../Singletons';

export default class LocationListMediator {
    constructor(view) {
        this.view = view;
        //const { di } = view.props;
        //const dispatch = di('dispatch');
        //this.locationActions = bindActionCreators(LocationActions, dispatch);
        //this.favoriteActions = bindActionCreators(FavoriteActions, dispatch);
        view.addFav = this.addFave.bind(this);
        this.view.setState({
            locations: locations.all
        });
        locationUpdatedSignal.add(this.view.forceUpdate);
    }

    addFave(id) {
        //this.favoriteActions.addFavorite(id);
        addFavoriteSignal.dispatch(id);
    }

}