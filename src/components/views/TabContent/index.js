import React, { Component } from 'react';
import styles from '../../../assets/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import MedicineList from '../MedicineList';
import InStock from '../InStock';
import OutOfStock from '../OutOfStock';
import { Container, Header, Tabs, Tab, Text } from 'native-base';

class TabContent extends Component {
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
    return (
      <Tabs initialPage={0}>
        <Tab heading="Medicine List">
          <MedicineList medicines={this.props.medicines} />
        </Tab>

        <Tab heading="In Stock">
          <InStock stock={this.props.stock} />
        </Tab>

        <Tab heading="Out of Stock">
          <OutOfStock outOfStock={this.props.outOfStock} />
        </Tab>
      </Tabs>
    );
  };
}

export default TabContent;
