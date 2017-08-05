import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import { Image } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import styles from '../../../assets/styles';

const MedicineDetails = ({ medicine, isVisible, toggleModal }) => {
  return (
    <Modal isVisible={isVisible} onBackButtonPress={toggleModal} animationIn={'flipInY'}>
      <Card style={styles.modalContent}>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: 'http://via.placeholder.com/150x150'}} />
            <Body>
              <Text>{medicine.get('name')}</Text>
              <Text note>{medicine.get('company')}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{uri: 'http://via.placeholder.com/100x100'}} style={{height: 100, flex: 1}} />
          <Text style={{marginLeft: 10}}>{medicine.get('description')}</Text>
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
