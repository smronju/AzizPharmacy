import React, { Component } from 'react';
import HeaderContent from '../controllers/HeaderContent';
import TabContent from '../controllers/TabContent';
import FabActions from '../controllers/Fab';
import { Container, Content } from 'native-base';

class AppContainer extends Component {
  render() {
    return (
      <Container>
        <HeaderContent />

        <Content>
          <TabContent />
        </Content>

        <FabActions />
      </Container>
    );
  }
}

export default AppContainer;
