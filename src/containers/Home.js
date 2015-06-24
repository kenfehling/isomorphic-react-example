import React, { PropTypes, Component } from 'react/addons';
import { DragDropContext } from 'react-dnd';
import HTML5Backend, { NativeTypes } from 'react-dnd/modules/backends/HTML5';
import Controls from '../components/Controls';
import OrangeBox from '../components/OrangeBox';
import Basket from '../components/Basket';
import Dish from '../components/Dish';
import Stats from '../components/Stats';
import { areaTheme } from '../styles/Themes';
import { bindActionCreators } from 'redux';
import * as OrangeActions from '../actions/OrangeActions';
import { connect } from 'redux/react';

const styles = {
  container: {
    backgroundColor: '#ffad00',
    color: '#000',
    height: "100%"
  },
  row: {
      display: "flex",
      height: areaTheme.height + areaTheme.margin
  }
}

@connect(state => ({
    oranges: state.oranges
}))
@DragDropContext(HTML5Backend)
export default class Container extends Component {
  static propTypes = {
      oranges: PropTypes.object.isRequired
  };

  render() {
    const { dispatch } = this.props;
    const orangeActions = bindActionCreators(OrangeActions, dispatch);

    return <div style={styles.container}>
      {/*
      <div style={styles.row}>
          <Basket actions={orangeActions} />
          <Controls actions={orangeActions} />
          <Dish actions={orangeActions} />
      </div>
      <div style={styles.row}>
          <Stats actions={orangeActions} />
      </div>
      */}
        <Controls actions={orangeActions} />
    </div>;
  }
}
