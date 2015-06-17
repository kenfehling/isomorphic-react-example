import { createStateSource } from 'marty';

export default createStateSource({
    type: 'http',
    id: 'LocationsAPI',
    getById(id) {
        return this.get('/locations/' + id);
    },
    getAll() {
        return this.get('/locations');
    },
    add() {
        return this.post('/locations');
    }
});