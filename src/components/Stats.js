import React, { PropTypes, Component } from 'react';
import { areaTheme, buttonTheme, verticalCenter } from './Themes';
import OrangeBox from './OrangeBox';

const styles = {
  container: {
      ...areaTheme,
      backgroundColor: 'lightgreen',
  },
  inner: {
      ...verticalCenter
  }
};

export default class Stats extends Component {
  static propTypes = {

  };

  render() {
    const { totalDays } = this.props;
    return <div style={styles.container}>
        <div style={styles.inner}>
	         <p>Health points, days, etc.</p>
           <p>Total days: {totalDays}</p>
       </div>
    </div>;
  }
}
