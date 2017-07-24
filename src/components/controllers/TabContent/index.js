import { connect } from 'react-redux';
import TabContent from '../../views/TabContent';
import { testAction } from '../../../actions';

const mapStateAsProps = (state) => {
  return {
    medicines: state.AzizPharmacy.getIn(['medicines', 'all']).toArray(),
    stock: state.AzizPharmacy.getIn(['medicines', 'inStock']).toArray(),
    outOfStock: state.AzizPharmacy.getIn(['medicines', 'outOfStock']).toArray()
  };
};

const mapDispatcherAsProps = (dispatch) => {
  return {
    testDispatch (data) {
      dispatch(testAction(data));
    }
  };
};

export default connect(mapStateAsProps, mapDispatcherAsProps)(TabContent);
