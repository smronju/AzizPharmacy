import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemList from '../Utilities/ItemList';
import { List } from 'native-base';

class InStock extends Component {
  render () {
    const { handlePress, handleLongPress } = this.props;

    return (
      <List
        dataArray={ this.props.stock }
        renderRow={ (stock) => <ItemList medicine={ stock } handlePress={ handlePress } handleLongPress={ handleLongPress } /> }>
      </List>
    );
  }
}

InStock.propTypes = {
  stock: PropTypes.array.isRequired
}

export default InStock;
