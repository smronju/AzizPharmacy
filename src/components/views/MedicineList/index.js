import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemList from '../Utilities/ItemList';
import { List } from 'native-base';

class MedicineList extends Component {
  render () {
    const { handlePress, handleLongPress } = this.props;

    return (
      <List
        dataArray={ this.props.medicines }
        renderRow={ (medicine) => <ItemList medicine={medicine} handlePress={ handlePress } handleLongPress={ handleLongPress } /> }>
      </List>
    );
  }
}

MedicineList.propTypes = {
  medicines: PropTypes.array.isRequired
}

export default MedicineList;
