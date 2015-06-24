import React, { Component } from 'react';
import orange_hash from '../constants/Orange.png';
import { orangeStyle } from './Themes';

export default class Orange extends Component {
  render() {
      return <img style={orangeStyle}
              src={ "data:image/png;base64," + orange_hash } />;
  }
}
