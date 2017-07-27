import { connect } from 'react-redux';
import TabContent from '../../views/TabContent';
import { testAction, toggleModal, setModalContent } from '../../../actions';

const mapStateAsProps = (state) => {
  return {
    medicines: state.AzizPharmacy.getIn(['medicines', 'all']).toArray(),
    stock: state.AzizPharmacy.getIn(['medicines', 'inStock']).toArray(),
    outOfStock: state.AzizPharmacy.getIn(['medicines', 'outOfStock']).toArray(),
    modalContent: state.AzizPharmacy.getIn(['medicines', 'modal', 'content']),
    modalFlag: state.AzizPharmacy.getIn(['medicines', 'modal', 'flag'])
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
