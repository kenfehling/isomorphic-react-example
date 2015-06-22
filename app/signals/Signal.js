export default class Signal {
    constructor() {
        this.listeners = [];
    }

    dispatch(data) {
        this.listeners.forEach((f) => f(data));
    }

    add(f) {
        this.listeners.push(f);
    }

    remove(f) {
        // TODO: Implement
    }
}