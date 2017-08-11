import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Tabs, Tab, List, Text } from 'native-base';
import styles from '../../../assets/styles';
import MedicineList from '../MedicineList';
import InStock from '../InStock';
import OutOfStock from '../OutOfStock';
import ItemList from '../Utilities/ItemList';
import MedicineDetails from '../Utilities/MedicineDetails';

class TabContent extends Component {
  toggleModal = () => {
    this.props.toggleModal();
  }

  handlePress = (medicine) => {
    this.props.setModalContent(medicine);
    this.toggleModal();
  }

  handleLongPress = (status) => {
    if (status == 1) {
      alert('Medicine is in stock!');
    } else {
      alert('Medicine not in stock!');
    }
  }

  handleClick = () => {
    let data = {
      id: 6,
      name: 'Medicine name - 6',
      company: 'Compnay name - 6',
      description: 'Medicine description - 6',
      status: 'Availability - 6'
    };

    const { testDispatch } = this.props;
    testDispatch(data);
  }

  render () {
    const { search, searchResult, medicines, stock, outOfStock, modalFlag, modalContent } = this.props;

    if (search && searchResult.length > 0) {
      return (
        <View>
          <Text style={styles.searchHeader}>{searchResult.length} found in stock!</Text>
          <List
            dataArray={searchResult}
            renderRow={searchResult => { return <ItemList medicine={searchResult} handlePress={this.handlePress} handleLongPress={this.handleLongPress} />; }}
          />
        </View>
      );
    }

    return (
      <View>
        <Tabs initialPage={0}>
          <Tab heading="Medicine List">
            <MedicineList medicines={medicines} handlePress={this.handlePress} handleLongPress={this.handleLongPress} />
          </Tab>

          <Tab heading="In Stock">
            <InStock stock={stock} handlePress={this.handlePress} handleLongPress={this.handleLongPress} />
          </Tab>

          <Tab heading="Out of Stock">
            <OutOfStock outOfStock={outOfStock} handlePress={this.handlePress} handleLongPress={this.handleLongPress} />
          </Tab>
        </Tabs>

        { (modalContent.size > 0) ? <MedicineDetails medicine={modalContent} isVisible={modalFlag} toggleModal={this.toggleModal} /> : null }
      </View>
    );
  }
}

TabContent.defaultProps ={
  search: false
};

TabContent.propTypes = {
  search: PropTypes.bool,
  searchResult: PropTypes.array.isRequired,
  medicines: PropTypes.array.isRequired,
  stock: PropTypes.array.isRequired,
  outOfStock: PropTypes.array.isRequired,
  testDispatch: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  modalFlag: PropTypes.bool.isRequired,
  modalContent: PropTypes.object.isRequired,
  setModalContent: PropTypes.func.isRequired
};

export default TabContent;
