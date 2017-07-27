import { fromJS } from 'immutable';
import * as type from '../constants/ActionTypes';
import { testAction } from './lib/AzizPharmacy';
import { toggleSearch } from './lib/Search';
import { toggleModal, setModalContent } from './lib/Modal';

const initialState = fromJS ({
  medicines: {
    all: [
      { id: 1, name: 'Medicine name - 1', company: 'Compnay name - 1', description: 'Medicine description - 1', status: 1 },
      { id: 2, name: 'Medicine name - 2', company: 'Compnay name - 2', description: 'Medicine description - 2', status: 1 },
      { id: 3, name: 'Medicine name - 3', company: 'Compnay name - 3', description: 'Medicine description - 3', status: 1 },
      { id: 4, name: 'Medicine name - 4', company: 'Compnay name - 4', description: 'Medicine description - 4', status: 1 },
      { id: 5, name: 'Medicine name - 5', company: 'Compnay name - 5', description: 'Medicine description - 5', status: 1 },
      { id: 6, name: 'Medicine name - 6', company: 'Compnay name - 6', description: 'Medicine description - 6', status: 1 },
      { id: 7, name: 'Medicine name - 7', company: 'Compnay name - 7', description: 'Medicine description - 7', status: 1 },
      { id: 8, name: 'Medicine name - 8', company: 'Compnay name - 8', description: 'Medicine description - 8', status: 1 },
      { id: 9, name: 'Medicine name - 9', company: 'Compnay name - 9', description: 'Medicine description - 9', status: 1 },
      { id: 10, name: 'Medicine name - 10', company: 'Compnay name - 10', description: 'Medicine description - 10', status: 1 },
      { id: 11, name: 'Medicine name - 11', company: 'Compnay name - 11', description: 'Medicine description - 11', status: 0 },
      { id: 12, name: 'Medicine name - 12', company: 'Compnay name - 12', description: 'Medicine description - 12', status: 0 },
      { id: 13, name: 'Medicine name - 13', company: 'Compnay name - 13', description: 'Medicine description - 13', status: 0 },
      { id: 14, name: 'Medicine name - 14', company: 'Compnay name - 14', description: 'Medicine description - 14', status: 0 },
      { id: 15, name: 'Medicine name - 15', company: 'Compnay name - 15', description: 'Medicine description - 15', status: 0 }
    ],
    inStock: [
      { id: 1, name: 'Medicine name - 1', company: 'Compnay name - 1', description: 'Medicine description - 1', status: 1 },
      { id: 2, name: 'Medicine name - 2', company: 'Compnay name - 2', description: 'Medicine description - 2', status: 1 },
      { id: 3, name: 'Medicine name - 3', company: 'Compnay name - 3', description: 'Medicine description - 3', status: 1 },
      { id: 4, name: 'Medicine name - 4', company: 'Compnay name - 4', description: 'Medicine description - 4', status: 1 },
      { id: 5, name: 'Medicine name - 5', company: 'Compnay name - 5', description: 'Medicine description - 5', status: 1 },
      { id: 6, name: 'Medicine name - 6', company: 'Compnay name - 6', description: 'Medicine description - 6', status: 1 },
      { id: 7, name: 'Medicine name - 7', company: 'Compnay name - 7', description: 'Medicine description - 7', status: 1 },
      { id: 8, name: 'Medicine name - 8', company: 'Compnay name - 8', description: 'Medicine description - 8', status: 1 },
      { id: 9, name: 'Medicine name - 9', company: 'Compnay name - 9', description: 'Medicine description - 9', status: 1 },
      { id: 10, name: 'Medicine name - 10', company: 'Compnay name - 10', description: 'Medicine description - 10', status: 1 }
    ],
    outOfStock: [
      { id: 11, name: 'Medicine name - 11', company: 'Compnay name - 11', description: 'Medicine description - 11', status: 0 },
      { id: 12, name: 'Medicine name - 12', company: 'Compnay name - 12', description: 'Medicine description - 12', status: 0 },
      { id: 13, name: 'Medicine name - 13', company: 'Compnay name - 13', description: 'Medicine description - 13', status: 0 },
      { id: 14, name: 'Medicine name - 14', company: 'Compnay name - 14', description: 'Medicine description - 14', status: 0 },
      { id: 15, name: 'Medicine name - 15', company: 'Compnay name - 15', description: 'Medicine description - 15', status: 0 }
    ],
    search: {
      flag: false,
      text: '',
      medicines: []
    },
    modal: {
      flag: false,
      content: []
    }
  }
});

export function AzizPharmacy (state = initialState, action) {
  switch (action.type) {
    case type.TEST_ACTION:
      return testAction(state, action);
    case type.TOGGLE_SEARCH:
      return toggleSearch(state);
    case type.TOGGLE_MODAL:
      return toggleModal(state);
    case type.SET_MODAL_CONTENT:
      return setModalContent(state, action);
    default:
      return state;
  }
}
