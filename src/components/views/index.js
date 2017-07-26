import React from 'react';
import { Container, Content } from 'native-base';
import HeaderContent from '../controllers/HeaderContent';
import TabContent from '../controllers/TabContent';
import FabActions from '../controllers/Fab';

const AppContainer = () => {
  return (
    <Container>
      <HeaderContent />

      <Content>
        <TabContent />
      </Content>

      <FabActions />
    </Container>
  );
};

export default AppContainer;
