import React from 'react/addons';
import StyleSheet from 'react-style';
import { createContainer } from 'marty';
import LocationsStore from '../stores/LocationsStore';
import FavoritesStore from '../stores/FavoritesStore';
import LocationActions from '../actions/LocationsActionCreators';

const styles = StyleSheet.create({
    page: {
        margin: 'auto',
        textAlign: 'center',
        fontSize: 14
    },
    section: {
        marginBottom: 20
    },
    error: {
        color: "#F00"
    }
});

class Favorites {
    render() {
        console.log(this.props);
        return <ul>
            {this.props.favorites.map((location, i) => {
                return (
                    <li key={i}>{location.name}</li>
                );
            })}
        </ul>;
    }
}

class AllLocations {
    addFave(ev) {
        var location = LocationsStore.getLocation(
            Number(ev.target.getAttribute('data-id'))
        );
        LocationActions.favoriteLocation(location);
    }

    render() {
        if (this.props.errorMessage) {
            return <div styles={[styles.error]}>{this.props.errorMessage}</div>;
        }

        if (LocationsStore.isLoading()) {
            return <div>
                <img src="/images/ajax-loader.gif" />
            </div>;
        }

        return <ul>
            { this.props.locations.map((location, i) => {
                var faveButton = (
                    <button onClick={this.addFave} data-id={location.id}>
                        Favorite
                    </button>
                );

                return <li key={i}>
                    {location.name} {location.has_favorite ? '<3' : faveButton}
                </li>;
            })}
        </ul>;
    }
}

var Locations = React.createClass({
    render() {
        var locations = this.props.locations;
        return <div className='locations'>{locations}</div>;
    }
});

export default createContainer(Locations, {
    listenTo: 'LocationsStore',
    fetch: {
        location() {
            console.log(LocationsStore.for(this));
            return LocationsStore.for(this).getById(this.props.id);
        }
    },
    failed(errors) {
        return <div styles={[styles.error]}>{errors}</div>;
    },
    pending() {
        return this.done({
            location: {}
        });
    }
});