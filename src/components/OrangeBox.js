import React, { PropTypes, Component } from 'react';
import DraggableOrange from './DraggableOrange';
import { verticalCenter } from './Themes';

const styles = {
    box: {
        ...verticalCenter,
        backgroundColor: 'yellow',
        width: "100%",
        height: 250
    }
};

@fetch(actions => actions.fetchOranges())
export default class OrangeBox extends Component {
  render() {
    const { oranges } = this.props;
    return <div style={styles.box}>
        {
            Array.apply(0, Array(oranges)).map((x, i) => {
                return <DraggableOrange key={i} />;
            })
        }
    </div>;
  }
l}
