import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppContainer from './components/controllers/AppController';

class AzizPharmacy extends Component {
  render() {
    return (
      <Provider store={ store }>
        <AppContainer />
      </Provider>
    );
  }
}

export default AzizPharmacy;
