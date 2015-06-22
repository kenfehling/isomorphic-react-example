import React, { PropTypes, Component } from 'react/addons';
import StyleSheet from 'react-style';
import LocationListMediator from '../mediators/LocationListMediator';

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

export default class LocationList extends Component {

    static defaultProps = {
        mediatorClass: LocationListMediator
    };

    constructor(props) {
        super(props);
        this.state = {
            locations: []
        }
    }

    componentDidMount() {
        new this.props.mediatorClass(this);
    }

    render() {
        return <div>
            <h1>Locations</h1>
            { this.state.locations ? this.state.locations.map((loc, i) => {
                var faveButton = <button onClick={() => this.addFav(loc.id)}>
                    Favorite
                </button>;
                return <p key={i}>
                    {loc.name} {loc.hasFavorite ? '<3' : faveButton}
                </p>;
            }) : <div styles={[styles.error]}>No locations</div>}
        </div>;
    }
}