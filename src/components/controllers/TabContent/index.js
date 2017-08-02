import { connect } from 'react-redux';
import TabContent from '../../views/TabContent';
import { testAction, toggleModal, setModalContent } from '../../../actions';

const mapStateAsProps = (state) => {
  return {
    search: state.AzizPharmacy.getIn(['medicines', 'search', 'flag']),
    searchResult: state.AzizPharmacy.getIn(['medicines', 'search', 'medicines']).toArray(),
    medicines: state.AzizPharmacy.getIn(['medicines', 'all']).toArray(),
    stock: state.AzizPharmacy.getIn(['medicines', 'all']).filter(medicine => medicine.get('status') == 1).toArray(),
    outOfStock: state.AzizPharmacy.getIn(['medicines', 'all']).filter(medicine => medicine.get('status') == 0).toArray(),
    modalFlag: state.AzizPharmacy.getIn(['medicines', 'modal', 'flag']),
    modalContent: state.AzizPharmacy.getIn(['medicines', 'modal', 'content'])
  };
};

const mapDispatcherAsProps = (dispatch) => {
  return {
    testDispatch (data) {
      dispatch(testAction(data));
    },
    toggleModal () {
      dispatch(toggleModal());
    },
    setModalContent (data) {
      dispatch(setModalContent(data));
    }
  };
};

export default connect(mapStateAsProps, mapDispatcherAsProps)(TabContent);
