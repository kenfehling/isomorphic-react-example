import { createStateSource } from 'marty';

export default createStateSource({
    type: 'http',
    id: 'FavoritesAPI',
    getById(id) {
        return this.get('/favorites/' + id);
    },
    getAll() {
        return this.get('/favorites');
    },
    add() {
        return this.post('/favorites');
    }
});