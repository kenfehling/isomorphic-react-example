import React, { PropTypes } from 'react/addons';
import StyleSheet from 'react-style';
import { fetch } from './decorators';

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

@fetch(actions => actions.fetchAllLocations())
export default class LocationList {
    static propTypes = {
        locations: PropTypes.array.isRequired
    };

    addFave() {

    }

    render() {
        const { locations } = this.props;
        return <div styles={[styles.page]}>
            <h1>Locations</h1>
            { locations ? locations.map((location, i) => {
                var faveButton = (
                    <button onClick={this.addFave} data-id={location.id}>
                        Favorite
                    </button>
                );
                return <p key={i}>
                    {location.name} {location.has_favorite ? '<3' : faveButton}
                </p>;
            }) : <div styles={[styles.error]}>No locations</div>}
            <h1>Favorites</h1>
            <p>Not implemented</p>
        </div>;
    }
}