import React, { PropTypes, Component } from 'react';
import DropArea from './DropArea';
import ItemTypes from './ItemTypes';
import { fetch } from './decorators';

@fetch(actions => actions.fetchOranges())
export default class Dish {
  static propTypes = {
    dishOranges: PropTypes.number.isRequired
  };

  render() {
    const { dropInDish } = this.props.actions;
    return <DropArea accepts={[ItemTypes.ORANGE]} onDrop={dropInBasket}
              name="Dish" label="Oranges eaten" oranges={dishOranges} />
  }
}
