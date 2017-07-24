import React from 'react';
import styles from '../../../assets/styles';
import { ListItem, Body, Right, Text, Icon } from 'native-base';

const ItemList = ({ medicine }) => {
  handlePress = (name) => {
    alert(name);
  }

  handleLongPress = (status) => {
    if (status == 1) {
      alert('Medicine is in stock!');
    } else {
      alert('Medicine not in stock!');
    }
  }

  return (
    <ListItem onPress={ () => this.handlePress(medicine.get('name')) } onLongPress={ () => this.handleLongPress(medicine.get('status')) }>
      <Body>
        <Text>{medicine.get('name')}</Text>
        <Text note>{medicine.get('description')}</Text>
      </Body>
      <Right>
        <Text>{<Icon name={ (medicine.get('status') == 1) ? 'ios-cart' : 'ios-cart-outline' } />}</Text>
      </Right>
    </ListItem>
  );
}

export default ItemList;
