import { mutateField } from '../utils/model';

export default class Location {
    constructor(id:String, name:String, hasFavorite:Boolean=false) {
        this._id = id;
        this._name = name;
        this._hasFavorite = hasFavorite;
    }

    setId(id:String, callback:Function) {
        mutateField(this, '_id', id, callback);
    }

    setName(name:String, callback:Function) {
        mutateField(this, '_name', name, callback);
    }

    setHasFavorite(hasFavorite:Boolean, callback:Function) {
        mutateField(this, '_hasFavorite', hasFavorite, callback);
    }

    get id() : String { return this._id; };
    get name() : String { return this._name; };
    get hasFavorite() : Boolean { return this._hasFavorite; };
}