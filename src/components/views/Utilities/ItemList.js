import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Body, Right, Text, Icon } from 'native-base';

const ItemList = ({ medicine, handlePress, handleLongPress }) => {
  return (
    <ListItem onPress={() => {handlePress(medicine); }} onLongPress={() => {handleLongPress(medicine.get('status')); }}>
      <Body>
        <Text>{medicine.get('name')}</Text>
        <Text note>{medicine.get('description')}</Text>
      </Body>
      
      <Right>
        <Text>{<Icon name={(medicine.get('status') == 1) ? 'ios-cart' : 'ios-cart-outline'} />}</Text>
      </Right>
    </ListItem>
  );
};

ItemList.propTypes = {
  medicine: PropTypes.object.isRequired,
  handlePress: PropTypes.func.isRequired,
  handleLongPress: PropTypes.func.isRequired
};

export default ItemList;
