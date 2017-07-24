import React, { Component } from 'react';
import ItemList from '../Utilities/ItemList';
import { List } from 'native-base';

class OutOfStock extends Component {
  renderRow (outOfStock) {
    return <ItemList medicine={outOfStock} />
  }

  render() {
    return <List dataArray={this.props.outOfStock} renderRow={this.renderRow}></List>
  }
}

export default OutOfStock;
