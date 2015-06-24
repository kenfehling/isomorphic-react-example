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
        locations: PropTypes.array.isRequired,
        addFavorite: PropTypes.func.isRequired
    };

    addFave(ev) {
        const id = ev.target.getAttribute('data-id');
        this.props.addFavorite(id);
    }

    render() {
        const { locations } = this.props;
        return <div>
            <h1>Locations</h1>
            { locations ? locations.map((location, i) => {
                var faveButton = (
                    <button onClick={this.addFave.bind(this)} data-id={location._id}>
                        Favorite
                    </button>
                );
                return <p key={i}>
                    {location.name} {location.has_favorite ? '<3' : faveButton}
                </p>;
            }) : <div styles={[styles.error]}>No locations</div>}
        </div>;
    }
}
