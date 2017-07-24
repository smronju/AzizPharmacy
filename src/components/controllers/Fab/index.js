import { connect } from 'react-redux';
import FabActions from '../../views/Fab';
import { testAction } from '../../../actions';

const mapStateAsProps = (state) => {
  return {
    medicines: state.AzizPharmacy.getIn(['medicines', 'all']).toArray()
  };
};

const mapDispatcherAsProps = (dispatch) => {
  return {
    testDispatch (data) {
      dispatch(testAction(data));
    }
  };
};

export default connect(mapStateAsProps, mapDispatcherAsProps)(FabActions);
