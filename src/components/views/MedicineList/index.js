import React, { Component } from 'react';
import ItemList from '../Utilities/ItemList';
import { List } from 'native-base';

class MedicineList extends Component {
  renderRow (medicine) {
    return <ItemList medicine={medicine} />
  }

  render() {
    return (
      <List dataArray={this.props.medicines} renderRow={this.renderRow}></List>
    );
  }
}

export default MedicineList;
