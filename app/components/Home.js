import React from 'react/addons';
import StyleSheet from'react-style';
import fakeData from '../data/fakeData.js';

const styles = StyleSheet.create({
    page: {
        margin: 'auto',
        textAlign: 'center',
        fontSize: 14
    }
});


export default class Home {

    render() {
        return <div styles={[styles.page]}>
            {fakeData[0].name}
        </div>;

    }
}