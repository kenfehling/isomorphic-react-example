import React, { PropTypes, Component } from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';
import Orange from './Orange';

const boxSource = {
  beginDrag(props) {
    return {
      name: props.name
    };
  }
};

@DragSource("orange", boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
export default class DraggableOrange extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  };

  render() {
    const { connectDragSource, isDragging } = this.props;
    const opacity = isDragging ? 0.4 : 1;
	   return connectDragSource(
      <Orange style={{opacity}} src="/images/orange.png" />
    );
  }
}
