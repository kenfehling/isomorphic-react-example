import React from 'react/addons';
import StyleSheet from 'react-style';
import LocationStore from '../stores/LocationStore';
import FavoritesStore from '../stores/FavoritesStore';
import AltContainer from 'alt/AltContainer';
import LocationActions from '../actions/LocationActions';

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
        return <ul>
            {this.props.locations.map((location, i) => {
                return (
                    <li key={i}>{location.name}</li>
                );
            })}
        </ul>;
    }
}

class AllLocations {
    addFave(ev) {
        var location = LocationStore.getLocation(
            Number(ev.target.getAttribute('data-id'))
        );
        LocationActions.favoriteLocation(location);
    }

    render() {
        if (this.props.errorMessage) {
            return <div styles={[styles.error]}>{this.props.errorMessage}</div>;
        }

        if (LocationStore.isLoading()) {
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

export default class Home {
    componentDidMount() {
        LocationStore.fetchLocations();
    }

    render() {
        return <div styles={[styles.page]}>
            <h1>Locations</h1>
            <AltContainer styles={[styles.section]} store={LocationStore}>
                <AllLocations />
            </AltContainer>

            <h1>Favorites</h1>
            <AltContainer styles={[styles.section]} store={FavoritesStore}>
                <Favorites />
            </AltContainer>
        </div>;
    }
}