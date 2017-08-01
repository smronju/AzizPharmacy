import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppContainer from './components/controllers/AppController';

const AzizPharmacy = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default AzizPharmacy;
