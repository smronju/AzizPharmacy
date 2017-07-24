import React, { Component } from 'react';
import ItemList from '../Utilities/ItemList';
import { List } from 'native-base';

class InStock extends Component {
  renderRow (stock) {
    return <ItemList medicine={stock} />
  }

  render() {
    return <List dataArray={this.props.stock} renderRow={this.renderRow}></List>
  }
}

export default InStock;
