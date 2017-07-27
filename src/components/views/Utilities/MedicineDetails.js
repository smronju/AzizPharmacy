import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Image } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

const MedicineDetails = ({ medicine, isVisible, toggleModal }) => {
  return (
    <Modal visible={isVisible} onRequestClose={toggleModal}>
      <Card style={{flex: 0}}>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: 'http://via.placeholder.com/150x150'}} />
            <Body>
              <Text>{medicine.get('name')}</Text>
              <Text note>{medicine.get('company')}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Body>
            <Image source={{uri: 'http://via.placeholder.com/180x180'}} style={{height: 200, width: 200, flex: 1}} />
            <Text>{medicine.get('description')}</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent textStyle={{color: '#87838B'}}>
              <Icon name={(medicine.get('status') == 1) ? 'ios-cart' : 'ios-cart-outline'} />
              <Text>{(medicine.get('status') == 1) ? '  in stock' : '  not in stock'}</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
    </Modal>
  );
};


MedicineDetails.propTypes = {
  medicine: PropTypes.object.isRequired,
  isVisible: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired
};

export default MedicineDetails;
