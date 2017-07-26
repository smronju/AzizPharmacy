import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemList from '../Utilities/ItemList';
import { List } from 'native-base';

class OutOfStock extends Component {
  renderRow (outOfStock) {
    return <ItemList medicine={ outOfStock } />;
  }

  render () {
    const { handlePress, handleLongPress } = this.props;

    return (
      <List
        dataArray={ this.props.outOfStock }
        renderRow={ (outOfStock) => <ItemList medicine={ outOfStock } handlePress={ handlePress } handleLongPress={ handleLongPress } /> }>
      </List>
    );
  }
}

OutOfStock.propTypes = {
  outOfStock: PropTypes.array.isRequired
}

export default OutOfStock;
