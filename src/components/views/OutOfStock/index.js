import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'native-base';
import ItemList from '../Utilities/ItemList';

const OutOfStock = ({ outOfStock, handlePress, handleLongPress }) => {
  return (
    <List
      dataArray={outOfStock}
      renderRow={outOfStock => { return <ItemList medicine={outOfStock} handlePress={handlePress} handleLongPress={handleLongPress} />; }}
    />
  );
};

OutOfStock.propTypes = {
  outOfStock: PropTypes.array.isRequired,
  handlePress: PropTypes.func.isRequired,
  handleLongPress: PropTypes.func.isRequired
};

export default OutOfStock;
