import React, { PropTypes, Component } from 'react';
import { areaTheme, buttonTheme } from './Themes';
import OrangeBox from './OrangeBox';

const styles = {
  container: {
    ...areaTheme,
    backgroundColor: '#F7EAC8',
  },
  button: {
    ...buttonTheme,
    margin: 16,
    position: 'relative',
    top: 50
  }
};

export default class Controls extends Component {
  static propTypes = {
    onNewDay: PropTypes.func.isRequired
  };
  render() {
    const { onNewDay } = this.props;
    return <div style={styles.container}>
	     <OrangeBox {...this.props} />
       <button style={styles.button} onClick={onNewDay}>Let a new day begin</button>
    </div>;
  }
}
