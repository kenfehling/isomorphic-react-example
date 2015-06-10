import React from "react/addons";
import StyleSheet from'react-style';

const styles = StyleSheet.create({
    page: {
        textAlign: "center",
        color: "#F00",
        fontSize: 14,
        fontWeight: "bold"
    }
});

export default class NotFound {
    render() {
        return <div styles={[styles.page]}>
            404: Page not found
        </div>;
    }
}