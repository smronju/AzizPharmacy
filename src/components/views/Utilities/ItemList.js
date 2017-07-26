import React from 'react';
import styles from '../../../assets/styles';
import { ListItem, Body, Right, Text, Icon } from 'native-base';

const ItemList = ({ medicine, handlePress, handleLongPress }) => {

  return (
    <ListItem onPress={ () => handlePress(medicine.get('name')) } onLongPress={ () => handleLongPress(medicine.get('status')) }>
      <Body>
        <Text>{medicine.get('name')}</Text>
        <Text note>{medicine.get('description')}</Text>
      </Body>
      <Right>
        <Text>{<Icon name={ (medicine.get('status') == 1) ? 'ios-cart' : 'ios-cart-outline' } />}</Text>
      </Right>
    </ListItem>
  );
};

export default ItemList;
