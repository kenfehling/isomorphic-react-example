import React, { PropTypes, Component } from 'react';
import { areaTheme, buttonTheme } from '../styles/Themes';
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
    actions: PropTypes.object.isRequired
  };
  render() {
    const { actions } = this.props;
    return <div style={styles.container}>
	     <OrangeBox {...this.props} />
       <button style={styles.button} onClick={actions.newDay}>Let a new day begin</button>
    </div>;
  }
}
