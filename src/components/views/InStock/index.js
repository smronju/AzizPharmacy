import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'native-base';
import ItemList from '../Utilities/ItemList';

const InStock = ({ stock, handlePress, handleLongPress }) => {
  return (
    <List
      dataArray={stock}
      renderRow={stock => { return <ItemList medicine={stock} handlePress={handlePress} handleLongPress={handleLongPress} />; }}
    />
  );
};

InStock.propTypes = {
  stock: PropTypes.array.isRequired,
  handlePress: PropTypes.func.isRequired,
  handleLongPress: PropTypes.func.isRequired
};

export default InStock;
