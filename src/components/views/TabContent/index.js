import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'native-base';
import MedicineList from '../MedicineList';
import InStock from '../InStock';
import OutOfStock from '../OutOfStock';

class TabContent extends Component {
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
          <MedicineList medicines={this.props.medicines} handlePress={this.handlePress} handleLongPress={this.handleLongPress} />
        </Tab>

        <Tab heading="In Stock">
          <InStock stock={this.props.stock} handlePress={this.handlePress} handleLongPress={this.handleLongPress} />
        </Tab>

        <Tab heading="Out of Stock">
          <OutOfStock outOfStock={this.props.outOfStock} handlePress={this.handlePress} handleLongPress={this.handleLongPress} />
        </Tab>
      </Tabs>
    );
  }
}

TabContent.propTypes = {
  medicines: PropTypes.array.isRequired,
  stock: PropTypes.array.isRequired,
  outOfStock: PropTypes.array.isRequired,
  testDispatch: PropTypes.func.isRequired
};

export default TabContent;
