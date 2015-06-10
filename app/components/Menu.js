import React from "react/addons";
import StyleSheet from'react-style';
import { Link } from 'react-router';

const styles = StyleSheet.create({
    menu: {
        textAlign: "center",
        marginTop: 4,
        marginBottom: 16
    },
    item: {
        color: "#36F",
        fontSize: 14,
        fontWeight: 'bold',
        margin: 16
    }
});

export default class Menu {

    render() {
        return <div styles={[styles.menu]}>
            <Link to="/" styles={[styles.item]}>Home</Link>
            <Link to="about" styles={[styles.item]}>About</Link>
        </div>;
    }
}