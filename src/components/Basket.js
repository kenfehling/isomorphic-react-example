import React, { PropTypes, Component } from 'react';
import DropArea from './DropArea';
import ItemTypes from './ItemTypes';
import { fetch } from './decorators';

@fetch(actions => actions.fetchOranges())
export default class Basket{
  static propTypes = {
    basketOranges: PropTypes.number.isRequired
  };

  render() {
    const { dropInBasket } = this.props.actions;

    console.log(this.state);

    return <DropArea accepts={[ItemTypes.ORANGE]} onDrop={dropInBasket}
              name="Basket" label="Oranges saved" oranges={this.props.basketOranges} />
  }
}
