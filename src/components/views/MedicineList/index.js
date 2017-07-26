import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'native-base';
import ItemList from '../Utilities/ItemList';

const MedicineList = ({ medicines, handlePress, handleLongPress }) => {
  return (
    <List
      dataArray={medicines}
      renderRow={medicine => { return <ItemList medicine={medicine} handlePress={handlePress} handleLongPress={handleLongPress} />; }}
    />
  );
};

MedicineList.propTypes = {
  medicines: PropTypes.array.isRequired,
  handlePress: PropTypes.func.isRequired,
  handleLongPress: PropTypes.func.isRequired
};

export default MedicineList;
