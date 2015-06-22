import _ from 'lodash';

export default class Locations {
    constructor() {
        this.all = [];
    }

    add(location : Location) {
        this.all.push(location);
    }

    getById(id : String) {
        return _.find(this.all, (location) => {
            console.log(location.id, id);
            return location.id === id;
        });
    }
}