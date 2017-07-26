import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Header, Right, Body, Button, Title, Input, Item, Text, Icon } from 'native-base';

class HeaderContent extends Component {

  handleTap = () => {
    this.props.toggleSearch();
  }

  render () {
    if (this.props.search) {
      return (
        <Header searchBar rounded>
          <Item>
            <Icon name="search" />
            <Input placeholder="Search" />
            <Button transparent onPress={this.handleTap}><Icon name="close" /></Button>
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      );
    }

    return (
      <Header searchBar rounded>
        <Body>
          <Title>
            <Icon name='pulse' style={{color: 'white'}} /> Aziz Pharmacy
          </Title>
        </Body>

        <Right>
          <Button transparent onPress={this.handleTap}>
            <Icon name="search" />
          </Button>
        </Right>
      </Header>
    );
  }
}

HeaderContent.propTypes = {
  search: PropTypes.bool.isRequired,
  toggleSearch: PropTypes.func.isRequired
};

export default HeaderContent;
